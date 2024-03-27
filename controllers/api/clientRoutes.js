const router = require('express').Router();
const { Client } = require('../../models');
const withAuth = require('../../utils/auth');

// @desc    Fetch all clients
// @route   GET /api/clients/
// @access  Public
router.get('/', withAuth, async (req, res) => {
  // Ensure the user is logged in
  if (!req.session.logged_in) {
    res.status(401).json({ message: 'Please log in to view clients.' });
    return;
  }

  try {
    // Fetch clients associated with the logged-in user's ID
    const clientData = await Client.findAll({
      where: { user_id: req.session.user_id }, // Use the user_id stored in session
      attributes: { exclude: ['password'] }
    });

    res.status(200).json(clientData);
  } catch (error) {
    console.error('Error fetching client data:', error);
    res.status(500).json({ message: 'Failed to fetch client data.' });
  }
});


// @desc    Create a  clients
// @route   POST /api/clients/
// @access  Public
router.post('/', withAuth, async (req, res) => {
  try {
    const newClient = await Client.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newClient);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
