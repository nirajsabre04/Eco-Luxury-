import React from 'react';

const PolicyPage = () => {
  return (
    <div className="policy-container">
      <style>
        {`
          .policy-container {
            padding: 2rem;
            max-width: 800px;
            margin: 0 auto;
            text-align: left;
          }

          .policy-title {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
            text-align: center;
          }

          .policy-content h2 {
            font-size: 1.8rem;
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
          }

          .policy-content p {
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 1rem;
          }

          @media (max-width: 768px) {
            .policy-container {
              padding: 1rem;
            }

            .policy-title {
              font-size: 2rem;
            }

            .policy-content h2 {
              font-size: 1.5rem;
            }

            .policy-content p {
              font-size: 0.9rem;
            }
          }
        `}
      </style>
      <h1 className="policy-title">No Return Refund Cancellation Policy</h1>
      <div className="policy-content">
        <p>
          At Puja samagri, we strive to provide the best products and services to our customers. However, due to the nature of our products, we have a strict no return, no refund, and no cancellation policy. Please read the following terms carefully before making a purchase.
        </p>
        <h2>No Return Policy</h2>
        <p>
          Once a product has been purchased, it cannot be returned under any circumstances. We do not accept returns or exchanges for any reason. Please ensure that you have carefully reviewed your order before completing the purchase.
        </p>
        <h2>No Refund Policy</h2>
        <p>
          All sales are final. We do not provide refunds for any products or services purchased. In the event of a defective or damaged product, please contact our customer support team within 24 hours of receiving your order. We will review the issue and provide a suitable resolution at our discretion.
        </p>
        <h2>No Cancellation Policy</h2>
        <p>
          Orders cannot be canceled once they have been placed. Please ensure that you have reviewed your order carefully before completing the purchase. If you have any questions or concerns, please contact our customer support team before placing your order.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or need further assistance, please contact our customer support team at [Your Contact Information]. We are here to help and will do our best to address any concerns you may have.
        </p>
      </div>
    </div>
  );
}

export default PolicyPage;
