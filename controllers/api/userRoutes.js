const router = require('express').Router();
const { User } = require('../../models');

// @desc    Fetch all users
// @route   GET /api/users/
// @access  Public
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] }
    });
    res.status(200).json(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Failed to fetch user data.' });
  }
});


// @desc    Login a user
// @route   POST /api/users/login
// @access  Public
router.post('/login', async (req, res) => {
  console.log(req.body)
  // try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  // } catch (err) {
  //   res.status(400).json(err);
  // }
});

// @desc    Logout a user
// @route   POST /api/users/logout
// @access  Public
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(200).json({ message: 'Successfully logged out.' });
    });
  } else {
    res.status(404).json({ message: 'No active session found.' });
  }
});


module.exports = router;
