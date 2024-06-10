const Lesson = require("../models/Lesson");

exports.getAllLessons = async (req, res) => {
  try {
    const lessons = await Lesson.findAll();
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findByPk(req.params.id);
    if (lesson) {
      res.json(lesson);
    } else {
      res.status(404).json({ error: "Lesson not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createLesson = async (req, res) => {
  try {
    const lesson = await Lesson.create(req.body);
    res.status(201).json(lesson);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findByPk(req.params.id);
    if (lesson) {
      await lesson.update(req.body);
      res.json(lesson);
    } else {
      res.status(404).json({ error: "Lesson not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findByPk(req.params.id);
    if (lesson) {
      await lesson.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Lesson not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
