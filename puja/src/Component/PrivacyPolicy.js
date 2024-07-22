import React from 'react';

const PrivacyPolicy = () => {
  const css = `
    .privacy-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      line-height: 1.6;
    }

    .privacy-container h1 {
      text-align: center;
      margin-bottom: 20px;
    }

    .privacy-container section {
      margin-bottom: 20px;
    }

    .privacy-container h2 {
      margin-top: 20px;
    }

    .privacy-container p {
      margin: 10px 0;
    }

    .privacy-container a {
      color: #007bff;
      text-decoration: none;
    }

    .privacy-container a:hover {
      text-decoration: underline;
    }
  `;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>

      <section>
        <h2>1. Introduction</h2>
        <p>Welcome to our puja samagri website. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>We may collect personal information that you provide to us directly, such as your name, email address, phone number, and payment information. We also collect information automatically when you use our website, including IP addresses, browser types, and usage data.</p>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>Your information is used to process orders, improve our website, communicate with you, and send you promotional offers if you have opted in to receive them. We may also use your information to comply with legal obligations.</p>
      </section>

      <section>
        <h2>4. How We Protect Your Information</h2>
        <p>We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
      </section>

      <section>
        <h2>5. No Return and No Refund Policy</h2>
        <p>All sales are final. Due to the nature of our products, we do not accept returns or offer refunds for any reason. Please make sure to review your order carefully before completing your purchase.</p>
      </section>

      <section>
        <h2>6. Third-Party Services</h2>
        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. Please review their privacy policies before providing any personal information.</p>
      </section>

      <section>
        <h2>7. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of the website after any modifications indicates your acceptance of the revised policy.</p>
      </section>

      <section>
        <h2>8. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@pujasamagriwebsite.com">support@pujasamagriwebsite.com</a>.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
