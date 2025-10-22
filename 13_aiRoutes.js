const router = require('express').Router();
const c = require('../controllers/AIController');
router.post('/chat', c.chat);
router.post('/execute', c.execute);
module.exports = router;
