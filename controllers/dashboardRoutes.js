const router = require('express').Router();
const { Client, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const clientData = await Client.findAll({
      where: { user_id: req.session.user_id },
      attributes: [
        'name',
        'phoneNumber',
        'repairOrderNumber',
        'carModel',
        'serviceRequested',
        'waitingForService'
      ],
      include: [{
        model: User,
        attributes: {
          exclude: ["password"]
        }
      },
      ]
    });
    const clients = clientData.map(client => client.get({ plain: true }))
    res.render('dashboard', { clients, loggedIn: true });
  } catch (error) {
    console.error('Error fetching client data:', error);
    res.status(500).json({ message: 'Failed to fetch client data.' });
  }
});

module.exports = router;
