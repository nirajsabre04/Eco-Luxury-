import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../CSS/OrderConfirm.css'; // Import CSS for styling

const OrderConfirmation = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/'); // Navigate to the home page
    };

    return (
        <div className="order-confirmation">
            <h1>Thank you for shopping with us!</h1>
            <p>Your order is placed. You will receive order details on your WhatsApp shortly.</p>
            <button className="home-button" onClick={handleHomeClick}>
                Go to Home
            </button>
        </div>
    );
};

export default OrderConfirmation;