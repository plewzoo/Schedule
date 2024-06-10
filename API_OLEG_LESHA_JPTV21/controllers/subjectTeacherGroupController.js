// subjectTeacherGroupController.js
const SubjectTeacherGroup = require('../models/subjectTeacherGroup');

class SubjectTeacherGroupController {
    constructor() {
        this.subjectTeacherGroupModel = SubjectTeacherGroup;
    }

    async getAllSubjectTeacherGroups(req, res) {
        try {
            const subjectTeacherGroups = await this.subjectTeacherGroupModel.findAll();
            res.json(subjectTeacherGroups);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async createSubjectTeacherGroup(req, res) {
        const { subjectId, teacherId, groupId } = req.body;
        try {
            const newSubjectTeacherGroup = await this.subjectTeacherGroupModel.create({ subjectId, teacherId, groupId });
            res.status(201).json(newSubjectTeacherGroup);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    // Другие методы, например, для получения, обновления и удаления записей
}

module.exports = new SubjectTeacherGroupController();
