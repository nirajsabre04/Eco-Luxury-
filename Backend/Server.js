const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/payment', async (req, res) => {
  const { amount, currency, token } = req.body;

  try {
    const charge = await stripe.charges.create({
      amount,
      currency,
      source: token,
      description: 'Payment description',
    });

    res.status(200).send({ success: true, charge });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
