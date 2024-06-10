// scheduleModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Classroom = require("./Classroom");
const Lesson = require("./Lesson");
const subjectTeacherGroup = require("./subjectTeacherGroup");

const Schedule = sequelize.define(
    "Schedule",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        classroomId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Classroom,
                key: 'id'
            }
        },
        lessonId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Lesson,
                key: 'id'
            }
        },
        subjectTeacherGroupId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: subjectTeacherGroup,
                key: 'id'
            }
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
    },
    {
        tableName: "schedule",
        timestamps: false
    }
);

// Define associations
Schedule.belongsTo(Classroom, { foreignKey: 'classroomId' }); 
Schedule.belongsTo(Lesson, { foreignKey: 'lessonId' }); 
Schedule.belongsTo(subjectTeacherGroup, { foreignKey: 'subjectTeacherGroupId' }); 


module.exports = Schedule;