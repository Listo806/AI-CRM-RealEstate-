const router = require('express').Router();
const c = require('../controllers/AnalyticsController');
router.post('/cma', c.cma);
router.post('/predict', c.predict);
module.exports = router;
