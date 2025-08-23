import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const useContactForm = () => {
	const [formState, setFormState] = useState({
		isLoading: false,
		message: {
			text: '',
			status: null, // null, 'success', 'error'
		},
	});

	const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
	const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
	const mailboxlayerApiKey = import.meta.env.VITE_MAILBOXLAYER_API_KEY;

	const setMessage = (text, status) => {
		setFormState((prev) => ({
			...prev,
			message: { text, status },
		}));
	};

	const clearMessage = () => {
		setFormState((prev) => ({
			...prev,
			message: { text: '', status: null },
		}));
	};

	const setLoading = (isLoading) => {
		setFormState((prev) => ({
			...prev,
			isLoading,
		}));
	};

	const validateEmail = async (email) => {
		try {
			const response = await fetch(
				`http://apilayer.net/api/check?access_key=${mailboxlayerApiKey}&email=${email}&smtp=1&format=1`
			);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();

			// Handle API errors - like quota exceeded
			if (data.error) {
				if (data.error.type === 'quota_exceeded') {
					throw new Error(
						'Email verification service temporarily unavailable. Please try again later.'
					);
				}
				throw new Error(data.error.info || 'Email verification failed');
			}

			// Check if email is valid and deliverable
			if (!data.format_valid) {
				throw new Error('Please enter a valid email format.');
			}

			if (!data.smtp_check) {
				throw new Error(
					'Email not deliverable. Please check or use a different one.'
				);
			}

			return true;
		} catch (error) {
			// Handle network errors
			if (error.name === 'TypeError' && error.message.includes('fetch')) {
				throw new Error(
					'Network error. Please check your connection and try again.'
				);
			}
			throw error;
		}
	};

	const sendEmail = async (formData) => {
		const { name, email, project } = formData;

		// Reset state
		setLoading(true);
		clearMessage();

		try {
			// Validate email first
			await validateEmail(email);

			// Send email via EmailJS
			const templateParams = { name, email, project };

			const response = await emailjs.send(serviceId, templateId, templateParams);

			if (response.status === 200) {
				setMessage(
					'Message sent successfully! Thank you for reaching out.',
					'success'
				);
				return true;
			} else {
				throw new Error('Failed to send message');
			}
		} catch (error) {
			console.error('Send email error:', error);
			setMessage(
				error.message || 'Something went wrong. Please try again.',
				'error'
			);
			return false;
		} finally {
			setLoading(false);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = {
			name: e.target.name.value.trim(),
			email: e.target.email.value.trim(),
			project: e.target.project.value.trim(),
		};

		// Basic client-side validation
		if (!formData.name || !formData.email || !formData.project) {
			setMessage('Please fill in all required fields.', 'error');
			return;
		}

		const success = await sendEmail(formData);

		// Clear form on success
		if (success) {
			e.target.reset();
		}
	};

	return {
		formState,
		handleSubmit,
		clearMessage,
	};
};
