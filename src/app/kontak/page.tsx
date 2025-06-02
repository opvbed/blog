'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Kontak</h1>
      <div className="card">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 text-white font-medium rounded-md ${
              isSubmitting
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            } transition duration-150 ease-in-out`}
          >
            {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
          </button>

          {submitStatus === 'success' && (
            <p className="text-green-600 text-center">
              Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
            </p>
          )}

          {submitStatus === 'error' && (
            <p className="text-red-600 text-center">
              Terjadi kesalahan. Silakan coba lagi nanti.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
