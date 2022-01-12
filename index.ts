// @ts-ignore
import { connect } from 'https://deno.land/x/sqlite_shell/mod.ts'

// Connect to a database
const db = await connect('test.db')
await db.execute(
  'CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)',
)

const names = ['Peter Parker', 'Clark Kent', 'Bruce Wayne']

// Run a simple query
// @ts-ignore
for (const name of names) {
  await db.execute('INSERT INTO people (name) VALUES (?)', [name])
}

// Print out data in table
// @ts-ignore
for await (const {name} of db.query('SELECT name FROM people')) {
  console.log(name)
}

// Close connection
await db.close()