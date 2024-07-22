import React from 'react';

const ShippingPolicy = () => {
  const css = `
    .shipping-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      line-height: 1.6;
    }

    .shipping-container h1 {
      text-align: center;
      margin-bottom: 20px;
    }

    .shipping-container section {
      margin-bottom: 20px;
    }

    .shipping-container h2 {
      margin-top: 20px;
    }

    .shipping-container p {
      margin: 10px 0;
    }

    .shipping-container a {
      color: #007bff;
      text-decoration: none;
    }

    .shipping-container a:hover {
      text-decoration: underline;
    }
  `;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  return (
    <div className="shipping-container">
      <h1>Shipping Policy</h1>

      <section>
        <h2>1. Shipping Information</h2>
        <p>We want to ensure our products reach you in good shape and condition. We use renowned third-party vendors for shipping our products worldwide. Once your courier is shipped, we will share the tracking ID with you.</p>
      </section>

      <section>
        <h2>2. Packaging and Damage</h2>
        <p>While we take great care in packaging our products, we cannot guarantee 0 damage during shipment as it depends entirely on how the shipping company handles the courier in transit. Should you encounter any issues, please contact us with clear pictures of the product and the outer carton/cover, including the order ID, within 3 days of receiving the shipment.</p>
      </section>

      <section>
        <h2>3. Complaints and Refunds</h2>
        <p>If you have any complaints, reach out to <a href="mailto:sales@hetha.in">sales@hetha.in</a> with the required images. We will do our best to assist you, but please note that refunds are not guaranteed for products damaged during shipment.</p>
      </section>

      <section>
        <h2>4. Dispatch and Delivery Time</h2>
        <p>Orders are dispatched from Hetha within 3 to 7 working days under normal circumstances. Delivery times may vary due to factors beyond our control, including unexpected delays from our courier partners, weather conditions, strikes, or other events.</p>
      </section>
    </div>
  );
};

export default ShippingPolicy;
