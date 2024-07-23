import axios from 'axios';
import qs from 'qs'; // Ensure you have this installed with `npm install qs`

const API_URL = 'http://localhost/puja_samagri/'; // Adjust this path as needed

// Function to submit contact form
export const submitContactForm = (formData) => {
  return axios.post(`${API_URL}contact.php`, qs.stringify(formData), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

// Function to submit cart details

