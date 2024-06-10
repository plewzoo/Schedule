// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController'); 
// // const authJWT = require('../middleware/authJWT');
// // const authJwt = require('../middleware/authJWT');

// router.post('/users/signup', userController.create);
// router.post('/users/signin', userController.signin);
// router.get('/users', userController.findAll);
// // router.get('/users/:id', userController.findOne);
// // router.put('/users/:id',authJWT.verifyToken, authJwt.checkUserId, userController.update);
// // router.delete('/users/:id',authJWT.verifyToken, authJwt.checkUserId, userController.delete);
// // router.get('/users/username/:username', userController.findUsersByUsername);

// module.exports = router;



const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); 
// const authJWT = require('../middleware/authJWT');

router.post('/users/signup', userController.createUser);
router.post('/users/signin', userController.signin);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
router.get('/users/username/:username', userController.findUsersByUsername);

module.exports = router;
