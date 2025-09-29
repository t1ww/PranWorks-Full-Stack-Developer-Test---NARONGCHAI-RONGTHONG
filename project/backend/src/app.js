// backend/src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const usersController = require('./controllers/usersController');
const { getAllUsers, createUser } = require('./services/usersService');

const app = express();
app.use(bodyParser.json());

app.get('/users', usersController.getAllUsers);
app.post('/users', usersController.createUser);

app.listen(3000, () => console.log('Server running on port 3000'));

async function main() {
  try {
    console.log('=== Testing getAllUsers ===');
    const users = await getAllUsers(); // breakpoint here works
    console.log('Users:', users);

    console.log('=== Testing createUser ===');
    const newUser = await createUser({
      name: 'Test User',
      email: 'testuser@example.com',
      is_active: true
    }); // breakpoint here works
    console.log('New User:', newUser);

  } catch (err) {
    console.error(err);
  } finally {
    // Close knex connection when done
    const knex = require('../database/knex');
    await knex.destroy();
  }
}

main();