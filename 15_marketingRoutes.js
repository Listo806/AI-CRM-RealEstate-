const router = require('express').Router();
const c = require('../controllers/MarketingController');
router.post('/tasks', c.createTask);
router.post('/run-due', c.runDue);
module.exports = router;
