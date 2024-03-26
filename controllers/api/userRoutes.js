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

// @desc    Fetch user by id
// @route   GET /api/users/:id
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] }
    });

    if (!userData) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.status(200).json(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Failed to fetch user data.' });
  }
});

// @desc    Create a user
// @route   POST /api/users/
// @access  Public
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// @desc    Update user 
// @route   PUT /api/users/:id
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const [affectedRows] = await User.update(req.body, {
      where: { id: req.params.id },
    });

    if (affectedRows > 0) {
      // If the update was successful, fetch the updated user data to return
      const updatedUserData = await User.findByPk(req.params.id, {
        attributes: { exclude: ['password'] },
      });
      if (!updatedUserData) {
        // If the user with the specified ID doesn't exist
        res.status(404).json({ message: 'User not found.' });
        return;
      }
      res.status(200).json(updatedUserData);
      res.json({ user: userData, message: 'user successfully updated!' });
    } else {
      // No rows affected, implying no user found with the provided ID
      res.status(404).json({ message: 'User not found with provided ID.' });
    }
  } catch (error) {
    console.error('Error updating user data:', error);
    res.status(500).json({ message: 'Failed to update user data.' });
  }
});


// @desc    Login a user
// @route   POST /api/users/login
// @access  Public
router.post('/login', async (req, res) => {
  try {
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

  } catch (err) {
    res.status(400).json(err);
  }
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
