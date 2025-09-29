//project\backend\database\knex.js
const config = require('../src/knexfile'); // path to your knexfile
const knex = require('knex')(config.development);

module.exports = knex;
