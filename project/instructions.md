# Backend Instructions (Knex + PostgreSQL)

## 1. Configure Knex
Edit `backend/src/knexfile.js` with your PostgreSQL credentials:

```js
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',       // PostgreSQL host
      user: 'your_db_user',    // your DB username
      password: 'your_db_password', // your DB password
      database: 'your_db_name' // your database name
    },
    migrations: {
      directory: __dirname + '/../database/migrations'
    },
    seeds: {
      directory: __dirname + '/../database/seeds'
    }
  }
};
````

---

## 2. Running Migrations

Run all pending migrations:

```bash
npx knex migrate:latest --knexfile backend/src/knexfile.js
```

Rollback the last batch of migrations:

```bash
npx knex migrate:rollback --knexfile backend/src/knexfile.js
```

---

## 3. Running Seeds

Populate tables with mock data:

```bash
npx knex seed:run --knexfile backend/src/knexfile.js
```

---

## 4. Notes

* All migrations go in `backend/database/migrations`.
* All seed files go in `backend/database/seeds`.
* Make sure PostgreSQL is running and the database exists before running migrations.
* For development, you can run `npx knex migrate:latest` repeatedly; Knex will skip already-run migrations.