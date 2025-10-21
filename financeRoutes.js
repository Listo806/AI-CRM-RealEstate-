const router = require('express').Router();
const c = require('../controllers/FinanceController');
router.post('/advance', c.advance);
module.exports = router;
