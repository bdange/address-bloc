"use strict";
module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define(
    "Contact",
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {}
  );
  Contact.associate = function(models) {};
  return Contact;
};
