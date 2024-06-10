const Classroom = require("../models/Classroom");

exports.getAllClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.findAll();
    res.json(classrooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getClassroomById = async (req, res) => {
  try {
    const classroom = await Classroom.findByPk(req.params.id);
    if (classroom) {
      res.json(classroom);
    } else {
      res.status(404).json({ error: "Classroom not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createClassroom = async (req, res) => {
  try {
    const classroom = await Classroom.create(req.body);
    res.status(201).json(classroom);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateClassroom = async (req, res) => {
  try {
    const classroom = await Classroom.findByPk(req.params.id);
    if (classroom) {
      await classroom.update(req.body);
      res.json(classroom);
    } else {
      res.status(404).json({ error: "Classroom not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteClassroom = async (req, res) => {
  try {
    const classroom = await Classroom.findByPk(req.params.id);
    if (classroom) {
      await classroom.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Classroom not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
