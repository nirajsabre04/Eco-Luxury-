const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const userData = require("../models/inquiryModel");
const jsonData = require("../models/imgModel");
const authData = require("../models/authModel");

// POST Auth api
router.post("/reg", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingEmail = await authData.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email already exists!" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const registerUser = await authData.create({
      name,
      email,
      password: hashedPassword,  // Save the hashed password
    });

    res.status(201).json(registerUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: "Internal server error!" });
  }
});

// GET Login Auth Api
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await authData.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
