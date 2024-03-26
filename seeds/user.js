const { User } = require('../models');

const userData = [
  {
    "username": "EmmaJohnson",
    "email": "emma.johnson@example.com",
    "password": "emma1234"
  },
  {
    "username": "LiamBrown",
    "email": "liam.brown@example.com",
    "password": "liam5678"
  },
  {
    "username": "OliviaDavis",
    "email": "olivia.davis@example.com",
    "password": "olivia4321"
  },
  {
    "username": "NoahMiller",
    "email": "noah.miller@example.com",
    "password": "noah7890"
  },
  {
    "username": "SophiaWilson",
    "email": "sophia.wilson@example.com",
    "password": "sophia2468"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
