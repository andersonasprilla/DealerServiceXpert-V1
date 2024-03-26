const seedUsers = require('./user');
const seedClients=require('./client')

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedClients();
    process.exit(0);
};

seedAll();