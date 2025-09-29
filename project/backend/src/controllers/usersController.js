// backend/src/controllers/usersController.js
const userService = require('../services/usersService');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, is_active } = req.body;
    const newUser = await userService.createUser({ name, email, is_active });
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
