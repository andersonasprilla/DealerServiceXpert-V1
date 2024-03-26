const router = require('express').Router();
const { Client, User } = require('../models');
const withAuth = require('../utils/auth');


//http://localhost:3001/
router.get('/', async (req, res) => {
  try {
    // Get all clients and JOIN with user data
    const clientData = await Client.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const clients = clientData.map((client) => client.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      clients, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



//http://localhost:3001/client/5

router.get('/client/:id', async (req, res) => {
  try {
    const clientData = await Client.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const client = clientData.get({ plain: true });

    res.render('client', {
      ...client,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


//http://localhost:3001/profile
// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Client }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


//http://localhost:3001/login
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});


//http://localhost:3001/page1
router.get("/page1",async(req,res)=>{
  res.render("page1")
})

module.exports = router;
