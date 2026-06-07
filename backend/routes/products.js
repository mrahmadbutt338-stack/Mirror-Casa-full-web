const express = require('express');
const router = express.Router();

const products = [
  { id: 1, name: 'Wall Mirrors', description: 'Elegant wall mirrors for any room', price: '₹1,500', category: 'wall' },
  { id: 2, name: 'Full-Length Mirrors', description: 'Full-body mirrors for your dressing area', price: '₹3,000', category: 'full-length' },
  { id: 3, name: 'Bathroom Mirrors', description: 'Water-resistant mirrors for bathrooms', price: '₹2,000', category: 'bathroom' },
  { id: 4, name: 'Decorative Mirrors', description: 'Stylish framed mirrors for decoration', price: '₹4,500', category: 'decorative' },
  { id: 5, name: 'Smart LED Mirrors', description: 'Modern mirrors with LED lighting', price: '₹5,500', category: 'smart' },
  { id: 6, name: 'Custom Shape Mirrors', description: 'Mirrors made to your unique shape', price: '₹Custom', category: 'custom' }
];

router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
