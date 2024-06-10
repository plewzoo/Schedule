const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Teacher = db.define("Teacher", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // Другие поля модели
});

module.exports = Teacher;
