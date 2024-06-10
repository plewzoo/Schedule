// classroomModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Classroom = sequelize.define(
    "Classroom",
    {
        // Определение полей модели
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        floor: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // Остальные поля...
    },
    {
        // Настройки модели (необязательно)
        tableName: "classrooms", // Имя таблицы в базе данных
        timestamps: true, // Добавлять поля createdAt и updatedAt
        underscored: true // Использовать snake_case для названий полей и таблицы
    }
);

module.exports = Classroom;
