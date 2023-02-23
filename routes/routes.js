const { Router} = require('express');
const { homeGet, loginGet } = require('../controllers/routers');
const router = Router();



router.get('/', homeGet);
router.get('/login', loginGet);



module.exports = router;
