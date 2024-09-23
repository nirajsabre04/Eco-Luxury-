import React from "react";

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
          At Eco Luxury, we strive to provide the best products and services
          to our customers. However, due to the nature of our products, we have
          a strict no return, no refund, and no cancellation policy.
        </p>
       
      </div>
    </div>
  );
};

export default PolicyPage;
