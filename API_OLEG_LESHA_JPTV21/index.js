const express = require("express");
const sequelize = require('./config/database');
const app = express();
const PORT = process.env.PORT || 3000;

// Подключение маршрутов
const scheduleRoutes = require("./routes/scheduleRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const groupRoutes = require("./routes/groupRoutes");
const userRoutes = require("./routes/userRoutes");
const classroomRoutes = require("./routes/classroomRoutes");
const subjectRoutes = require("./routes/subjectRoutes")
const lessonRoutes = require("./routes/lessonRoutes")
const subjectTeacherGroupRoutes = require("./routes/subjectTeacherGroupRoutes")
app.use(express.json());

// Подключение маршрутов к приложению
app.use("/schedules", scheduleRoutes);
app.use("/teachers", teacherRoutes);
app.use("/groups", groupRoutes);
app.use(userRoutes);
app.use("/classrooms", classroomRoutes);
app.use("/subjects", subjectRoutes);
app.use("/lessons", lessonRoutes);
app.use("/subjectTeacherGroups", subjectTeacherGroupRoutes);


// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
