import React from 'react';

const ContactForm = () => {
  const css = `
    .contact-container {
      max-width: 500px; /* Smaller max-width for a more compact form */
      margin: 40px auto; /* Added top and bottom margin for spacing */
      padding: 25px; /* Increased padding for more space inside the form */
      background-color: #F9F9F9; /* Background color */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      border: 1px solid #ddd;
    }

    .contact-container h1 {
      text-align: center;
      margin-bottom: 20px; /* Increased margin-bottom for spacing */
      color: #333; /* Darker text color */
      font-size: 22px; /* Slightly larger font size */
    }

    .contact-form {
      display: flex;
      flex-direction: column;
    }

    .form-group {
      margin-bottom: 15px; /* Increased spacing between form groups */
    }

    .form-group label {
      display: block;
      margin-bottom: 6px; /* Slightly increased margin-bottom */
      font-weight: bold;
      color: #555; /* Slightly darker text color for labels */
      font-size: 15px; /* Slightly larger font size */
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 10px; /* Increased padding for inputs */
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box; /* Ensures padding is included in width */
    }

    .form-group textarea {
      resize: vertical;
    }

    button {
      padding: 10px 20px; /* Increased padding */
      border: none;
      border-radius: 4px;
      background-color: #007bff;
      color: white;
      font-size: 15px; /* Slightly larger font size */
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #0056b3;
    }

    /* Responsive Styles */
    @media (max-width: 768px) {
      .contact-container {
        padding: 30px;
        margin: 20px auto; /* Adjusted margin for mobile */
      }

      .contact-form {
        flex-direction: column;
      }

      .form-group {
        margin-bottom: 12px; /* Adjusted spacing for mobile */
      }

      button {
        width: 100%;
      }
    }
  `;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required pattern="[0-9]{10}" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
