const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Lesson = sequelize.define(
  "Lesson",
  {
    // Define model fields
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    starts: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ends: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // Model settings (optional)
    tableName: "lessons", // Table name in the database
    timestamps: true, // Add createdAt and updatedAt fields
    underscored: true // Use snake_case for column names and table name
  }
);

module.exports = Lesson;
