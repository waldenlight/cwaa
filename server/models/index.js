// import models
const User = require('./User');
const Client = require('./Client');

// Clients belongsTo Users
Client.belongsTo(User, {
    foreignKey: 'user_id',
});

// Users have many Clients
User.hasMany(Client, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = {
    User,
    Client
};
