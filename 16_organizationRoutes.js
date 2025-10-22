const router = require('express').Router();
const c = require('../controllers/OrganizationController');
router.post('/', c.createOrg);
router.get('/me', c.myOrg);
router.get('/deal/:dealId/splits', c.splitsForDeal);
module.exports = router;
