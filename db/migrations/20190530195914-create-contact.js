"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Contacts", {
      // first arg is name of table, second is key-value pairs
      id: {
        // defines a property called key
        allowNull: false, // property cannot be null
        autoIncrement: true, // is incremented automatically (1,2,3)
        primaryKey: true, //  primary key is a unique key that identifies an object
        type: Sequelize.INTEGER // sets property type. Only values of this type are allowed
      },
      name: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Contacts");
  }
};
