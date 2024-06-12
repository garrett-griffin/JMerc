const express = require('express');
const router = express.Router();

// Example endpoint
router.get('/status', (req, res) => {
    res.json({ status: 'Mercatorio API is working!' });
});

module.exports = router;
