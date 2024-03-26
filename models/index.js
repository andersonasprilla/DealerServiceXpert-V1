const User = require('./User');
const Client = require('./Client');

User.hasMany(Client, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Client.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Client };
