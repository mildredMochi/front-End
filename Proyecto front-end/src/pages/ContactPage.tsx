import React, { useState, useContext } from 'react';
import { ChevronLeft } from 'lucide-react';
import { LanguageContext } from '../context/AppContext';
import './ContactPage.css';

interface ContactPageProps {
  setCurrentPage: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ setCurrentPage }) => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('LanguageContext must be used within provider');
  const { t } = context;
  
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    telephone: '',
    company: '',
    subject: '',
    message: '',
    newsletter: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.lastName && formData.email && formData.telephone && formData.subject && formData.message) {
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = target.checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  if (submitted) {
    return (
      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-success">
            <h2>{t.submittedData}</h2>
            <div className="submitted-data">
              <p><strong>{t.name}:</strong> {formData.name}</p>
              <p><strong>{t.lastName}:</strong> {formData.lastName}</p>
              <p><strong>{t.email}:</strong> {formData.email}</p>
              <p><strong>{t.telephone}:</strong> {formData.telephone}</p>
              {formData.company && <p><strong>{t.company}:</strong> {formData.company}</p>}
              <p><strong>{t.subject}:</strong> {formData.subject}</p>
              <p><strong>{t.message}:</strong> {formData.message}</p>
            </div>
            <button className="btn-primary" onClick={() => setSubmitted(false)}>
              {t.backToContact}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <button className="back-btn" onClick={() => setCurrentPage('home')}>
            <ChevronLeft size={24} />
          </button>
          <div className="contact-header-text">
            <h1>{t.contact}</h1>
            <p className="contact-subtitle">{t.contactUs}</p>
          </div>
        </div>
        
        <div className="contact-form-wrapper">
          <div className="contact-form-header">
            <h3>{t.contactForm}</h3>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-grid">
              <div className="form-left">
                <input
                  type="text"
                  name="name"
                  placeholder={t.name}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                
                <input
                  type="text"
                  name="lastName"
                  placeholder={t.lastName}
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder={t.email}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                
                <input
                  type="tel"
                  name="telephone"
                  placeholder={t.telephone}
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                />
                
                <input
                  type="text"
                  name="company"
                  placeholder={t.company}
                  value={formData.company}
                  onChange={handleChange}
                />
                
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                  />
                  <span>{t.receiveNewsletter}</span>
                </label>
              </div>
              
              <div className="form-right">
                <input
                  type="text"
                  name="subject"
                  placeholder={t.subject}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                
                <textarea
                  name="message"
                  placeholder={t.message}
                  value={formData.message}
                  onChange={handleChange}
                  rows={10}
                  required
                />
              </div>
            </div>
            
            <div className="form-actions">
              <button type="submit" className="btn-submit">{t.send}</button>
            </div>
            
            <p className="form-notice">{t.dataConfidential}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;