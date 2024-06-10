// // subjectController.js
// const Subject = require('../models/Subject');

// class SubjectController {
//     constructor() {
//         this.subjectModel = Subject;
//     }

//     async getAllSubjects(req, res) {
//         try {
//             const subjects = await this.subjectModel.findAll();
//             res.json(subjects);
//         } catch (err) {
//             console.error(err);
//             res.status(500).json({ error: 'Internal Server Error' });
//         }
//     }

//     async getSubjectById(req, res) {
//         const id = req.params.id;
//         try {
//             const subject = await this.subjectModel.findByPk(id);
//             if (!subject) {
//                 res.status(404).json({ error: 'Subject not found' });
//             } else {
//                 res.json(subject);
//             }
//         } catch (err) {
//             console.error(err);
//             res.status(500).json({ error: 'Internal Server Error' });
//         }
//     }

//     async createSubject(req, res) {
//         const { name } = req.body;
//         try {
//             const newSubject = await this.subjectModel.create({ name });
//             res.status(201).json(newSubject);
//         } catch (err) {
//             console.error(err);
//             res.status(500).json({ error: 'Internal Server Error' });
//         }
//     }

//     async updateSubject(req, res) {
//         const id = req.params.id;
//         const { name } = req.body;
//         try {
//             const subject = await this.subjectModel.findByPk(id);
//             if (!subject) {
//                 res.status(404).json({ error: 'Subject not found' });
//             } else {
//                 await subject.update({ name });
//                 res.json(subject);
//             }
//         } catch (err) {
//             console.error(err);
//             res.status(500).json({ error: 'Internal Server Error' });
//         }
//     }

//     async deleteSubject(req, res) {
//         const id = req.params.id;
//         try {
//             const subject = await this.subjectModel.findByPk(id);
//             if (!subject) {
//                 res.status(404).json({ error: 'Subject not found' });
//             } else {
//                 await subject.destroy();
//                 res.sendStatus(204);
//             }
//         } catch (err) {
//             console.error(err);
//             res.status(500).json({ error: 'Internal Server Error' });
//         }
//     }
// }

// module.exports = new SubjectController();


const Subject = require('../models/Subject');

exports.getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.findAll();
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findByPk(req.params.id);
    if (subject) {
      res.json(subject);
    } else {
      res.status(404).json({ error: "Subject not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createSubject = async (req, res) => {
  try {
    const subject = await Subject.create(req.body);
    res.status(201).json(subject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateSubject = async (req, res) => {
  try {
    const subject = await Subject.findByPk(req.params.id);
    if (subject) {
      await subject.update(req.body);
      res.json(subject);
    } else {
      res.status(404).json({ error: "Subject not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteSubject = async (req, res) => {
  try {
    const subject = await Subject.findByPk(req.params.id);
    if (subject) {
      await subject.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Subject not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
