import React, { useState } from 'react';
import Modal from 'react-modal';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier zou je je form submission logica toevoegen (bijv. via een API call)
    console.log('Form data:', formData);
    setSubmitted(true);
  };

  const closeModal = () => {
    setSubmitted(false);
  };

  return (
    <div id='contactContent' className="max-w-5xl mx-auto p-8 bg-white shadow-md rounded-md flex flex-col lg:flex-row my-12">
      <div className="lg:w-1/2 pr-4 mb-8 lg:mb-0">
        <h2 className="text-2xl font-bold mb-6 text-center">Contacteer Ons</h2>
        <p className="text-center mb-8 text-gray-600">Wij horen graag van u!</p>
        <form className="space-y-4" action="https://formsubmit.co/eeaservices@outlook.com" method="POST">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 font-medium text-gray-700">Naam</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 font-medium text-gray-700">Telefoon</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 font-medium text-gray-700">Onderwerp</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Bericht</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            Verzenden
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 pl-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2500.7670441675905!2d4.371271576884676!3d51.18651643409389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f6b200cbec33%3A0xc25e49fe2336f907!2sZeelandstraat%2072%2C%202660%20Antwerpen!5e0!3m2!1snl!2sbe!4v1720800783159!5m2!1snl!2sbe"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Modal
        isOpen={submitted}
        onRequestClose={closeModal}
        contentLabel="Submission Confirmation"
        className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50"
      >
        <div className="bg-white p-8 rounded-md shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Bedankt!</h2>
          <p className="mb-4">Uw bericht is succesvol verzonden!</p>
          <button
            onClick={closeModal}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Sluit
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ContactForm;
