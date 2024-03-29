const router = require('express').Router();
const dashboardRoutes = require('./dashboardRoutes')
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

//http://localhost:3001/
router.use('/', homeRoutes);
router.use('/', dashboardRoutes)

//api routes
router.use('/api', apiRoutes);

module.exports = router;
