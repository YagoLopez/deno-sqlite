import { DB } from 'https://deno.land/x/sqlite/mod.ts'

// Open a database
const db = new DB('test.db')
db.query(`
  CREATE TABLE IF NOT EXISTS people (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
  )
`)

const names = ['Peter Parker', 'Clark Kent', 'Bruce Wayne']

// Run a simple query
// for (const name of names as any) {
//   db.query("INSERT INTO people (name) VALUES (?)", [name]);
// }

// Print out data in table
// @ts-ignore
for (const [name] of db.query('SELECT name FROM people')) {
  console.log(name)
}

// Close connection
db.close()