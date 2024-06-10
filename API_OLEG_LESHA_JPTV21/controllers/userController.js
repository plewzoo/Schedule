



const User  = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

exports.getAllUsers = async (req, res) => {
    try {
        console.log('Fetching all users');
        const users = await User.findAll();
        console.log('Users found:', users);
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        console.log(`Fetching user by ID: ${req.params.id}`);
        const user = await User.findByPk(req.params.id);
        if (user) {
            console.log('User found:', user);
            res.json(user);
        } else {
            console.log('User not found');
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        console.log('Creating new user:', req.body);
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({ ...req.body, password: hashedPassword });
        console.log('User created:', user);
        res.status(201).json(user);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(400).json({ error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        console.log(`Updating user by ID: ${req.params.id}`, req.body);
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.update(req.body);
            console.log('User updated:', user);
            res.json(user);
        } else {
            console.log('User not found');
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(400).json({ error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        console.log(`Deleting user by ID: ${req.params.id}`);
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            console.log('User deleted');
            res.status(204).json();
        } else {
            console.log('User not found');
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.findUsersByUsername = async (req, res) => {
    try {
        console.log(`Fetching users by username: ${req.params.username}`);
        const users = await User.findAll({
            where: {
                username: req.params.username
            }
        });
        console.log('Users found:', users);
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users by username:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.signin = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(`User sign-in attempt: ${username}`);
        const user = await User.findOne({ where: { username } });
        if (!user) {
            console.log('Invalid username');
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Invalid password');
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '2h' });
        console.log('Authentication successful', { userId: user.id });
        res.json({ message: 'Authentication successful', token });
    } catch (error) {
        console.error('Error during sign-in:', error);
        res.status(500).json({ error: 'User login failed' });
    }
};
