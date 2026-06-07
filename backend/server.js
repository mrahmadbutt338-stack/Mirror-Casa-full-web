require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

const productsRouter = require('./routes/products');
const servicesRouter = require('./routes/services');
const contactRouter = require('./routes/contact');

app.use('/api/products', productsRouter);
app.use('/api/services', servicesRouter);
app.use('/api/contact', contactRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
