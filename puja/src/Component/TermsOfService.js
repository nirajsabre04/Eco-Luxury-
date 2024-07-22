import React from 'react';


const TermsOfService = () => {
  return (
    <div className="terms-container">
      <h1>Terms of Service</h1>
      
      <section>
        <h2>1. Introduction</h2>
        <p>Welcome to our puja samagri website. By accessing or using our website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our website.</p>
      </section>

      <section>
        <h2>2. Eligibility</h2>
        <p>You must be at least 18 years old to use our services. By using our website, you represent and warrant that you meet this age requirement.</p>
      </section>

      <section>
        <h2>3. Use of the Website</h2>
        <p>You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others or restrict or inhibit their use and enjoyment of the website.</p>
      </section>

      <section>
        <h2>4. No Return and No Refund Policy</h2>
        <p>All sales are final. Due to the nature of our products, we do not accept returns or offer refunds for any reason.</p>
      </section>

      <section>
        <h2>5. Privacy Policy</h2>
        <p>We are committed to protecting your privacy. Please review our Privacy Policy to understand how we collect, use, and safeguard your information.</p>
      </section>

      <section>
        <h2>6. Intellectual Property</h2>
        <p>All content on our website, including text, graphics, logos, and images, is the property of our website and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our express written permission.</p>
      </section>

      <section>
        <h2>7. Limitation of Liability</h2>
        <p>We are not liable for any direct, indirect, incidental, or consequential damages arising out of your use of our website or our products. This includes, but is not limited to, damages for loss of profits, goodwill, or data.</p>
      </section>

      <section>
        <h2>8. Changes to the Terms of Service</h2>
        <p>We reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting on our website. Your continued use of the website constitutes your acceptance of the new terms.</p>
      </section>

      <section>
        <h2>9. Governing Law</h2>
        <p>These terms are governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of India.</p>
      </section>

      <section>
        <h2>10. Contact Information</h2>
        <p>If you have any questions or concerns about these Terms of Service, please contact us at <a href="mailto:support@pujasamagriwebsite.com">support@pujasamagriwebsite.com</a>.</p>
      </section>
    </div>
  );
};

const css = `
.terms-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
}

.terms-container h1 {
  text-align: center;
  margin-bottom: 20px;
}

.terms-container section {
  margin-bottom: 20px;
}

.terms-container h2 {
  margin-top: 20px;
}

.terms-container p {
  margin: 10px 0;
}

.terms-container a {
  color: #007bff;
  text-decoration: none;
}

.terms-container a:hover {
  text-decoration: underline;
}
`;

const style = document.createElement('style');
style.textContent = css;
document.head.append(style);

export default TermsOfService;
