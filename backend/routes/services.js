const express = require('express');
const router = express.Router();

const services = [
  { id: 1, name: 'Home Delivery', description: 'We deliver mirrors to your doorstep', icon: 'truck' },
  { id: 2, name: 'Professional Installation', description: 'Our team fits any mirror type', icon: 'wrench' },
  { id: 3, name: 'Custom Sizing', description: 'Made to your measurements', icon: 'ruler' },
  { id: 4, name: 'On-Site Consultation', description: 'We visit and guide you', icon: 'home' },
  { id: 5, name: 'Glass Partition Work', description: 'Glass partitions for offices and homes', icon: 'column' },
  { id: 6, name: 'Frame & Border Customization', description: 'Custom frames and borders', icon: 'image' }
];

router.get('/', (req, res) => {
  res.json(services);
});

module.exports = router;
