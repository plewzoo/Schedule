// subjectTeacherGroupRoutes.js
const express = require('express');
const router = express.Router();
const subjectTeacherGroupController = require('../controllers/subjectTeacherGroupController');

router.get('/', subjectTeacherGroupController.getAllSubjectTeacherGroups.bind(subjectTeacherGroupController));
router.post('/', subjectTeacherGroupController.createSubjectTeacherGroup.bind(subjectTeacherGroupController));

// Добавьте здесь другие маршруты для получения, обновления и удаления записей

module.exports = router;
