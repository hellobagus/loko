import React, { useState } from 'react';
import { ServiceType } from '../../types';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

interface ServiceFormProps {
  service: ServiceType;
}

const ServiceForm: React.FC<ServiceFormProps> = ({ service }) => {
  const [formData, setFormData] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real implementation, you would replace these with your actual EmailJS credentials
    const serviceId = 'YOUR_EMAILJS_SERVICE_ID';
    const templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
    const userId = 'YOUR_EMAILJS_USER_ID';

    try {
      // Prepare the template parameters
      const templateParams = {
        service_name: service.name,
        ...formData
      };

      // In a real implementation, uncommenting this would send the email
      // await emailjs.send(serviceId, templateId, templateParams, userId);
      
      // For demo purposes, we'll simulate a successful submission
      setTimeout(() => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        setFormData({});
      }, 1500);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setErrorMessage('There was a problem submitting your form. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className={`p-8 rounded-lg border-2 border-${service.color} bg-${service.color}/5 text-center`}>
        <div className={`w-16 h-16 mx-auto rounded-full bg-${service.color}/20 flex items-center justify-center mb-6`}>
          <Send className={`text-${service.color}`} size={24} />
        </div>
        <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          Your inquiry for {service.name} has been submitted successfully. We'll get back to you shortly to discuss your project in detail.
        </p>
        <button 
          onClick={() => setSubmitStatus('idle')}
          className={`btn bg-${service.color} text-white hover:bg-${service.color}/90`}
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`p-6 border border-gray-200 rounded-lg`}>
      <h3 className={`text-xl font-semibold mb-6 text-${service.color}`}>
        Request a Quote for {service.name}
      </h3>

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-600">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {service.forms.map((field) => {
          if (field.type === 'textarea') {
            return (
              <div key={field.id} className="md:col-span-2">
                <label htmlFor={field.id} className="form-label">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
                <textarea
                  id={field.id}
                  placeholder={field.placeholder}
                  required={field.required}
                  value={formData[field.id] || ''}
                  onChange={handleChange}
                  className="form-input min-h-[120px] resize-y"
                />
              </div>
            );
          }
          
          if (field.type === 'select') {
            return (
              <div key={field.id}>
                <label htmlFor={field.id} className="form-label">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
                <select
                  id={field.id}
                  required={field.required}
                  value={formData[field.id] || ''}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Select {field.label}</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            );
          }
          
          return (
            <div key={field.id}>
              <label htmlFor={field.id} className="form-label">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>
              <input
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                required={field.required}
                value={formData[field.id] || ''}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`btn bg-${service.color} text-white hover:bg-${service.color}/90 w-full`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </span>
        ) : (
          <span className="flex items-center justify-center">
            Submit Inquiry
            <Send size={16} className="ml-2" />
          </span>
        )}
      </button>
    </form>
  );
};

export default ServiceForm;