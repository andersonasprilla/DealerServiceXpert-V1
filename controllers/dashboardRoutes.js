const router = require('express').Router();
const { Client, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/dashboard', withAuth, async (req, res) => {
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
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
            model: User,
            attributes: ['username']
        }
    },
    {
        model: User,
        attributes: ['username']
    }
]
    });

    res.render('dashboard', { clients: clientData, loggedIn: true });
  } catch (error) {
    console.error('Error fetching client data:', error);
    res.status(500).json({ message: 'Failed to fetch client data.' });
  }
});

module.exports = router;
