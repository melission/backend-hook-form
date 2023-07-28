const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 7683;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  const { name, email } = req.body;
  console.log(`Received form data: Name - ${name}, Email - ${email}`);
  // You can save the data to the database or perform any other actions here
  res.status(200).json({ message: 'Form submitted successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});