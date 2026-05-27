'use client';

import { useState, FormEvent } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { cvData } from '@/data/cv';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export function ContactForm() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.name.trim()) {
      setError(t('required_field', language));
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError(t('invalid_email', language));
      return;
    }
    if (!formData.message.trim()) {
      setError(t('required_field', language));
      return;
    }

    setLoading(true);

    try {
      // Initialize EmailJS (should be done once in layout, but do it here for safety)
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'N/A',
        message: formData.message,
        to_email: cvData.personal.email,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError(t('error', language));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        {t('send_message', language)}
      </h3>

      {submitted && (
        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-600 rounded">
          <p className="text-green-700 font-semibold">{t('success', language)}</p>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-600 rounded">
          <p className="text-red-700 font-semibold">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              {t('name', language)} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              {t('email', language)} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
            {t('phone', language)} ({language === 'nl' ? 'optioneel' : 'optional'})
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            {t('message', language)} *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? t('sending', language) : t('send', language)}
        </button>
      </form>
    </div>
  );
}
