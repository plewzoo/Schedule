// subjectModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Subject = sequelize.define(
    "Subject",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hours: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: "subjects",
        timestamps: false
    }
);

module.exports = Subject;
