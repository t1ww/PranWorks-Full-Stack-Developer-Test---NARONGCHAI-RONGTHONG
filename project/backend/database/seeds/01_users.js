// project\backend\database\seeds\01_users.js
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del();

  // Insert 50 mock users
  const users = [];
  for (let i = 1; i <= 50; i++) {
    users.push({
      name: `User${i}`,
      email: `user${i}@example.com`,
      is_active: i % 2 === 0, // alternate active/inactive
      created_at: new Date()
    });
  }

  await knex('users').insert(users);
};
