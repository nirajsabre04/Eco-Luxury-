import React, { useContext, useState } from "react";
import { CartContext } from "../Context/Context";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, updateCartItemQuantity } =
    useContext(CartContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
    postalCode: "",
    city: "",
    state: "", // Default state selection
    country: "India", // Default country as India
  });

  const handleRemove = (itemId, itemHeading) => {
    console.log(`Removing item ${itemId}: ${itemHeading}`);
      removeFromCart(itemId);
      toast.error(`${itemHeading} removed from cart!`);
    };
    // Show dialog here with the message and the confirmRemove function
  
  const handleQuantityChange = (id, flavor, newQuantity) => {
    const parsedQuantity = parseInt(newQuantity, 10);
    
    console.log(`Updating quantity for ${id}, ${flavor} to ${parsedQuantity}`); // Debug log
  
    if (parsedQuantity > 0) {
      updateCartItemQuantity(id, flavor, parsedQuantity);
    } else {
      toast.error("Quantity cannot be less than 1.");
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, contactNumber, address, city, state, postalCode } = formData;

    const contactNumberRegex = /^[0-9]{10}$/;
    const textRegex = /^[a-zA-Z\s]+$/;
    const postalCodeRegex = /^[0-9]{6}$/;

    if (!name || !textRegex.test(name)) {
      toast.error("Please enter a valid name.");
      return false;
    }

    if (!contactNumber || !contactNumberRegex.test(contactNumber)) {
      toast.error("Please enter a valid contact number (10 digits).");
      return false;
    }
    if (!address) {
      toast.error("Please enter your address.");
      return false;
    }

    if (!city) {
      toast.error("Please enter your city.");
      return false;
    }

    if (!state) {
      toast.error("Please select your state.");
      return false;
    }

    if (!postalCode || !postalCodeRegex.test(postalCode)) {
      toast.error("Please enter a valid postal code (6 digits).");
      return false;
    }

    return true;
  };

  const handleCheckout = () => {
    if (validateForm()) {
      // Navigate to payment page
      const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);
      navigate("/payment", { state: { formData, totalCost } });
      setFormData({ name: "", email: "", contactNumber: "", address: "", postalCode: "", city: "", state: "", country: "India" }); // Reset form
    }
  };
  
  const totalCost = cart.reduce((total, item) => {
    const itemQuantity = parseInt(item.quantity, 10) || 1; // Default to 1 if quantity is invalid
    return total + item.price * itemQuantity;
  }, 0);
  
  return (
    <>
      <Toaster />
      <div className="Cart">
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button
              className="btn btn-primary"
              onClick={() => (window.location.href = "/#services")}
            >
              Add Products
            </button>
          </div>
        ) : (
          <>
            <div className="cart-container">
              <div className="customer-info">
                <h2>Customer Info</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      id="name"
                      name="name"
                      placeholder="Enter Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email (optional)</label>
                    <input
                      id="email"
                      name="email"
                      placeholder="Enter Your Email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactNumber">Contact Number *</label>
                    <input
                      id="contactNumber"
                      placeholder="Enter Your Mobile Number"
                      name="contactNumber"
                      type="tel"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="address">Address *</label>
                    <input
                      id="address"
                      name="address"
                      placeholder="Enter Your Address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City *</label>
                    <input
                      id="city"
                      name="city"
                      placeholder="Enter Your City"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State *</label>
                    <input
                      id="state"
                      name="state"
                      placeholder="Enter Your State"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="postalCode">Postal Code *</label>
                    <input
                      id="postalCode"
                      name="postalCode"
                      placeholder="Enter Your Postal Code"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="checkout-button-container">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleCheckout}
                    >
                      CheckOut
                    </button>
                  </div>
                </form>
              </div>

              <div className="vertical-line"></div>
              <div className="cart-items">
                <h2>Cart Items</h2>

                {cart.map((item, index) => (
  <div key={index} className="cart-item">
    <img src={item.image} alt={item.name} className="cart-item-image" />
    <div className="cart-item-details">
      <h3>
        {item.name} ({item.flavor})
      </h3>

      <p>Price: ₹{item.price}</p>

      <div className="quantity-control">
        <button
          className="btn btn-secondary"
          onClick={() => handleQuantityChange(item.id, item.flavor, item.quantity - 1)}
        >
          -
        </button>
        <span>{item.quantity || 1}</span> {/* Default to 1 if quantity is missing */}
        <button
          className="btn btn-secondary"
          onClick={() => handleQuantityChange(item.id, item.flavor, item.quantity + 1)}
        >
          +
        </button>
      </div>

      <button className="btn btn-danger" onClick={() => handleRemove(item.id, item.flavor)}>
        Remove
      </button>
    </div>
  </div>
))}

                <div className="total-cost">
                  <h3>Total Cost: ₹{totalCost}</h3>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <style jsx="true">{`
  .Cart {
    padding: 20px;
    text-align: center;
    box-sizing: border-box;
  }

  .empty-cart {
    margin-top: 50px;
  }

  .cart-container {
    background-color: #F9F9F9;
    border-radius: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    box-sizing: border-box;
    overflow: hidden; /* Prevent overflow */
  }

  .cart-items, .customer-info {
    overflow: hidden; /* Prevent overflow */
    flex: 1;
    min-width: 300px;
    margin: 10px;
    padding: 20px;
    box-sizing: border-box;
  }

  .customer-info {
    border-right: 2px solid #ddd;
  }

  .vertical-line {
    width: 2px;
    background-color: #ddd;
    height: 100%;
  }

  .cart-items h2, .customer-info h2 {
    margin-top: 0;
    font-size: 1.5em; /* Responsive font size */
  }

  .cart-item {
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    background-color: #fff;
    box-sizing: border-box;
    width: 100%; /* Ensure full width of container */
    overflow: hidden; /* Prevent overflow */
    box-sizing: border-box; /* Ensure padding and border are included in width */
  }

  .cart-item img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 20px;
  }

  .item-details {
    flex: 1;
    text-align: left;
  }

  .quantity-control {
    display: flex;
    align-items: center;
  }

  .quantity-control button {
    border: none;
    background-color: #F28C28;
    padding: 5px 10px;
    margin: 0 5px;
    cursor: pointer;
  }

  .quantity-control button:hover {
    background-color: #FFAC1C;
  }

  .total-cost {
    font-size: 1.25em;
    margin-top: 20px;
  }

  .form-group input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .form-group label {
    display: block;
    text-align: left;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
  }

  .btn-primary {
    background-color: #F28C28;
    color: #fff;
  }

  .btn-danger {
    background-color: #dc3545;
    color: #fff;
  }

  .checkout-button-container {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .cart-container {
      flex-direction: column;
    }

    .vertical-line {
      display: none;
    }

    .cart-items, .customer-info {
      margin: 0;
      border: none;
      padding: 10px;
    }

    .cart-item {
      flex-direction: column;
      align-items: flex-start;
      margin: 5px 0;
      width: 100%; /* Ensure full width of container */
      overflow: hidden; /* Prevent overflow */
    }

    .cart-item img {
      width: 80px;
      height: 80px;
    }

    .total-cost {
      font-size: 1em;
    }
  }

  @media (max-width: 480px) {
    .cart-item {
      width: 100%; /* Ensure full width on small screens */
      height: auto;
      flex-direction: row;
      align-items: center;
      // margin: 5px 0;
    }

    .customer-info {
      margin-left: .6rem;
    }
    
    .cart-item img {
      width: 50%;
      height: auto;
    }

    .quantity-control button {
    border:1px solid red;
    height:2rem;
    width:2rem;
    padding:0;
    font-size:1rem
    border-radius:none;
    }

    #btn-s{
    height:3rem;
    width:6rem;
    margin-left:.1rem;
    }

`}</style>
    </>
  );
}

export default Cart;
