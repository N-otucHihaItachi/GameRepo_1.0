const Router = require('express').Router();
const multer = require('multer');
const upload = multer(); // memory storage, good for parsing text-only multipart/form-data
const { registerUser,loginUser,logoutUser } = require('../Controllers/UserController');

// Use upload.none() to parse multipart/form-data fields (text only).
// If you plan to accept files, switch to upload.single('fieldname') or configure storage.
Router.post('/register', upload.none(), registerUser);
Router.post('/login', upload.none(), loginUser);
Router.get('/logout', logoutUser);

module.exports = Router;