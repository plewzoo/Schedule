const sequelize = require("./config/database");
const currentDate = new Date();
const User = require("./models/User");
const Teacher = require("./models/Teacher");
const Group = require("./models/Group");
const Schedule = require("./models/Schedule");
const Classroom = require("./models/Classroom");
const Subject = require("./models/Subject");
const Lesson = require("./models/Lesson");
const SubjectTeacherGroup = require("./models/subjectTeacherGroup");


const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // This will drop the table if it already exists and create a new one

    await User.bulkCreate([
      { username: "user1", email: "user1@example.com", password: "password1" },
      { username: "user2", email: "user2@example.com", password: "password2" }
    ]);

    await Teacher.bulkCreate([
      { name: "Oleg", lastname: "Koik" },
      { name: "Alexei", lastname: "Korosov" }
    ]);

    await Group.bulkCreate([
      { code: "JPTV21", name: "Jõhvi Põhikool Tarkvaraarendaja Vene 2021" },
      { code: "NPTV21", name: "Narva Põhikool Tarkvaraarendaja Vene 2021"}
    ]);

    await Classroom.bulkCreate([
      { name: "F204", floor: 2 },
      { name: "F205", floor: 3 }
    ]);


     await Subject.bulkCreate([
      { name: "Math", hours: "310"},
      { name: "English Language", hours: "230"},
      { name: "Estonian Language", hours: "250"},
      { name: "IT", hours: "340"}
    ]);

    await Lesson.bulkCreate([
      { number: 1, starts: "8:15", ends: "9:45"},
      { number: 2, starts: "9:55", ends: "11:25"},
      { number: 3, starts: "12:10", ends: "13:40"},
      { number: 4, starts: "13:50", ends: "15:20"}
    ]);


    await SubjectTeacherGroup.bulkCreate([
      { subjectId: 1, teacherId: 1, groupId: 1 },
      { subjectId: 2, teacherId: 2, groupId: 2 },
      { subjectId: 3, teacherId: 1, groupId: 1 },
      { subjectId: 4, teacherId: 2, groupId: 2 }
    ]);
    

    await Schedule.bulkCreate([
      {  classroomId: 1, lessonId: 1, subjectTeacherGroupId: 1, date: currentDate },
      {  classroomId: 2, lessonId: 2, subjectTeacherGroupId: 2, date: currentDate },
      {  classroomId: 3, lessonId: 3, subjectTeacherGroupId: 3, date: currentDate },
      {  classroomId: 4, lessonId: 4, subjectTeacherGroupId: 4, date: currentDate }
    ]);

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding the database:", error);
    process.exit(1);
  }
  
};


seedDatabase();
