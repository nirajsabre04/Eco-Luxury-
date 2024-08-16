//before facebook code Paymentform.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast'; // Ensure you have react-hot-toast installed

const PaymentForm = () => {
  const location = useLocation();
  const { formData, totalCost } = location.state || {};
  const navigate = useNavigate();
  

  const data = {
    name: formData?.name || "Vikas",
    amount: totalCost * 100 || 100, // Amount in paisa (1 INR = 100 paisa)
    number: formData?.contactNumber || "9999999999",
    email: formData?.email || "xyz@gmail.com",
    MUID: "MUID" + Date.now(),
    transactionId: "T" + Date.now(),
  };
  const sendEvent = async () => {
    const eventData = {
      event_name: 'Purchase',
      user_data: {
        em: [formData?.email || ''],
        ph: [formData?.contactNumber || '']
      },
      custom_data: {
        currency: 'INR',
        value: totalCost || 0
      }
    };

    try {
      await axios.post('/send_event.php', eventData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Event sent successfully');
    } catch (error) {
      console.error('Error sending event:', error);
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
        // Save order details to the database
        const saveOrderResponse = await axios.post("http://ecoluxury.in/save_order.php", {
            name: formData.name,
            email: formData.email,
            contact_number: formData.contactNumber,
            address: formData.address,
            country: formData.country,
            city: formData.city,
            postal_code: formData.postalCode,
            total_cost: totalCost,
            payment_method: 'Online Payment'
        });

        if (saveOrderResponse.data.status === 'success') {
            // Process the payment only if the order is saved successfully
            const paymentResponse = await axios.post("http://ecoluxury.in/payment.php", data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (paymentResponse.data && paymentResponse.data.url) {
                // Send email notification using Web3Forms
                const emailForm = new FormData();
                emailForm.append('access_key', '79e4bb50-f542-41c9-ab5a-c43967fbb958');
                emailForm.append('subject', 'New Order Received');
                emailForm.append('email', formData.email);
                emailForm.append('message', `
                    New order received with the following details:
                    Name: ${formData.name}
                    Email: ${formData.email}
                    Contact Number: ${formData.contactNumber}
                    Address: ${formData.address}
                    Country: ${formData.country}
                    City: ${formData.city}
                    Postal Code: ${formData.postalCode}
                    Total Cost: ₹${totalCost}
                    Payment Method: Online Payment
                `);
                  
                await axios.post('https://api.web3forms.com/submit', emailForm);

                // Redirect to the payment URL
                window.location.href = paymentResponse.data.url;
            } else {
                console.error("Payment initiation failed");
            }
        } else {
            console.error("Order saving failed:", saveOrderResponse.data.message);
        }
    } catch (error) {
        console.error("Error occurred:", error);
    }
};


  const handleCod = async (e) => {
    e.preventDefault();
    const codCharge = 30;
    const totalWithCod = totalCost + codCharge;
    // console.log('Handling COD Payment');
    // console.log('Original Total Cost:', totalCost);
    // console.log('COD Charge:', codCharge);
    // console.log('Total Cost with COD:', totalWithCod);

    // Save order details to database
    // try {
    //   await axios.post("http://localhost/save_order.php", {
    //     name: formData.name,
    //     email: formData.email,
    //     contact_number: formData.contactNumber,
    //     address: formData.address,
    //     country: formData.country,
    //     city: formData.city,
    //     postal_code: formData.postalCode,
    //     total_cost: totalWithCod,
    //     payment_method: 'Cash on Delivery'
    //   });

    //   toast.success(`Order Successfully Placed. Total Amount: ₹${totalWithCod}`);
      navigate('/cod-payment', { state: { formData, totalCost: totalWithCod } });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  // Define styles
  const containerStyle = {
    padding: '20px',
    maxWidth: '600px',
    margin: 'auto',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
  };

  const headerStyle = {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    textAlign: 'center',
  };

  const infoStyle = {
    margin: '0.5rem 0',
  };

  const totalCostStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    margin: '1rem 0',
    textAlign: 'center',
  };

  const formStyle = {
    marginTop: '1rem',
  };

  const buttonContainerStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px', // Space between buttons
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '100%',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const infoTextStyle = {
    fontSize: '0.875rem',
    color: '#333',
    textAlign: 'center',
    marginTop: '5px',
  };
  const infoTextStyle1 = {
    fontSize: '0.875rem',
    color: 'red',
    textAlign: 'center',
    marginTop: '5px',
  };

  // Responsive Styles
  const responsiveStyles = `
    @media (max-width: 768px) {
      .container {
        padding: 15px;
      }

      .header {
        font-size: 1.25rem;
      }

      .total-cost {
        font-size: 1.1rem;
      }

      .button {
        font-size: 0.9rem;
        padding: 8px 16px;
      }
    }

    @media (max-width: 480px) {
      .container {
        padding: 10px;
      }

      .header {
        font-size: 1.1rem;
      }

      .total-cost {
        font-size: 1rem;
      }

      .button {
        font-size: 0.8rem;
        padding: 6px 12px;
      }
    }
  `;

  return (
    <>
      <Toaster />
      <div style={containerStyle} className="container">
        <style>{responsiveStyles}</style>
        {formData ? (
          <>
            <h2 style={headerStyle} className="header">Customer Info</h2>
            <div>
              <p style={infoStyle}><strong>Name:</strong> {formData.name}</p>
              <p style={infoStyle}><strong>Email:</strong> {formData.email}</p>
              <p style={infoStyle}><strong>Contact Number:</strong> {formData.contactNumber}</p>
              <p style={infoStyle}><strong>Address:</strong> {formData.address}</p>
              <p style={infoStyle}><strong>Country:</strong> {formData.country}</p>
              <p style={infoStyle}><strong>City:</strong> {formData.city}</p>
              <p style={infoStyle}><strong>Postal Code:</strong> {formData.postalCode}</p>
            </div>
            <h2 style={totalCostStyle} className="total-cost">Total Cost: ₹{totalCost}</h2>
            
            <form style={formStyle}>
              <div style={buttonContainerStyle}>
                <button 
                  type="submit" 
                  style={buttonStyle}
                  className="button"
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                  onClick={handlePayment}
                >
                  Pay Now
                </button>
                <p style={infoTextStyle}><strong>Pay Online and get free delivery!</strong></p>

                <button 
                  type="button" 
                  style={buttonStyle}
                  className="button"
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                  onClick={handleCod}
                >
                  Cash on Delivery
                </button>
                <p style={infoTextStyle1}><strong>For COD Delivery charge applicable: ₹30</strong></p>
              </div>
            </form>
          </>
        ) : (
          <p>No customer info available. Please go back to the cart and provide your details.</p>
        )}
      </div>
    </>
  );
};

export default PaymentForm;

