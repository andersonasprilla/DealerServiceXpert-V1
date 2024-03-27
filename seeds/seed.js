const sequelize = require('../config/connection');
const { User, Client } = require('../models');

const userData = require('./userData.json');
const clientData = require('./clientData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const client of clientData) {
    await Client.create({
      ...client,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();