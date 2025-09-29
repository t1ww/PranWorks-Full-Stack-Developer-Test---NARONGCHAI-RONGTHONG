// backend/src/services/usersService.js
const knex = require('../../database/knex');

exports.getAllUsers = async () => {
  const users = await knex('users').select('*');

  // debug here (run with debugger)
  console.log('Fetched users:', users); // <-- Add watch
  // You can also put a breakpoint on the line above

  return users;
};

exports.createUser = async (user) => {
  const newUser = await knex('users')
    .insert(user)
    .returning('*');

  console.log('Inserted user:', newUser);
  // Add a breakpoint and watch 'newUser' to inspect it in detail

  return newUser;
};
