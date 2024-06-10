const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Group = sequelize.define(
  "Group",
  {
    // Определение полей модели
    // Например:
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Остальные поля...
  },
  {
    // Настройки модели (необязательно)
    tableName: "groups", // Имя таблицы в базе данных
    timestamps: true, // Добавлять поля createdAt и updatedAt
    underscored: true // Использовать snake_case для названий полей и таблицы
  }
);

module.exports = Group;
