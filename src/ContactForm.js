// Gustavo Corona
// src/ContactForm.js made July 31, 2025


// GitHub Repository URL: https://github.com/SugKrona/cs81-module11-contact-form

import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email';
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Invalid phone number (10 digits only)';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
      setErrors({}); // Clear errors
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', fontFamily: 'Arial, sans-serif' }}>
      <h2>Submit a Ticket</h2>
      {submitted ? (
        <div style={{ textAlign: 'center', padding: '20px', color: '#007bff' }}>
          <h3>Thank you for contacting TripleByte Studio support!</h3>
          <p>We will get back to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Name: <br />
            <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: 'calc(100% - 10px)', padding: '8px', margin: '5px 0', border: '1px solid #ddd', borderRadius: '4px' }} />
            {errors.name && <p style={{ color: 'red', margin: '0 0 10px 0', fontSize: '0.9em' }}>{errors.name}</p>}
          </label><br /><br />

          <label>Email:<br />
            <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: 'calc(100% - 10px)', padding: '8px', margin: '5px 0', border: '1px solid #ddd', borderRadius: '4px' }} />
            {errors.email && <p style={{ color: 'red', margin: '0 0 10px 0', fontSize: '0.9em' }}>{errors.email}</p>}
          </label><br /><br />

          <label>Phone Number:<br />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={{ width: 'calc(100% - 10px)', padding: '8px', margin: '5px 0', border: '1px solid #ddd', borderRadius: '4px' }} />
            {errors.phone && <p style={{ color: 'red', margin: '0 0 10px 0', fontSize: '0.9em' }}>{errors.phone}</p>}
          </label><br /><br />

          <label>Message: <br />
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} style={{ width: 'calc(100% - 10px)', padding: '8px', margin: '5px 0', border: '1px solid #ddd', borderRadius: '4px' }}></textarea>
            {errors.message && <p style={{ color: 'red', margin: '0 0 10px 0', fontSize: '0.9em' }}>{errors.message}</p>}
          </label><br /><br />

          <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontSize: '1em' }}>Submit</button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;