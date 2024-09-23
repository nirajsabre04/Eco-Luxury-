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
      
        <p>The orders for the user are shipped through registered domestic courier companies and/or speed post
only. Orders are shipped within 4 days from the date of the order and/or payment or as per the delivery
date agreed at the time of order confirmation and delivering of the shipment, subject to courier company /
post office norms. Platform Owner shall not be liable for any delay in delivery by the courier company /
postal authority. Delivery of all orders will be made to the address provided by the buyer at the time of
purchase. Delivery of our services will be confirmed on your email ID as specified at the time of
registration. If there are any shipping cost(s) levied by the seller or the Platform Owner (as the case be),
the same is not refundable.</p>
      </section>
    </div>
  );
};

export default ShippingPolicy;
