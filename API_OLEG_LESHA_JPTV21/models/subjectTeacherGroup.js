// subjectTeacherGroupModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Subject = require("./Subject");
const Teacher = require("./Teacher");
const Group = require("./Group");

const SubjectTeacherGroup = sequelize.define(
    "SubjectTeacherGroup",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        subjectId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        teacherId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        groupId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: "subject_teacher_group",
        timestamps: false
    }
);

SubjectTeacherGroup.belongsTo(Subject, { foreignKey: 'subjectId' });
SubjectTeacherGroup.belongsTo(Teacher, { foreignKey: 'teacherId' });
SubjectTeacherGroup.belongsTo(Group, { foreignKey: 'groupId' });

module.exports = SubjectTeacherGroup;
