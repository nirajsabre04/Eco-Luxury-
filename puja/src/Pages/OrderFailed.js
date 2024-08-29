import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/OrderFailed.css'; // Import CSS for styling

const OrderFailed = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/'); // Navigate to the home page
    };

    return (
        <div className="order-failed">
            <h1>Sorry, your order could not be placed!</h1>
            <p>There was an issue with your order. Please try again or contact support.</p>
            <button className="home-button" onClick={handleHomeClick}>
                Go to Home
            </button>
        </div>
    );
};

export default OrderFailed;