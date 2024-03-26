const router = require('express').Router();
const userRoutes = require('./userRoutes');
const clientRoutes = require('./clientRoutes');

router.use('/users', userRoutes);
router.use('/clients', clientRoutes);

module.exports = router;
