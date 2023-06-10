const pg = require('pg')

const localDbName = 'harrys_house'

let db;
if (process.env.DATABASE_URL) {
  db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })
} else {
  if (process.env.DB_PASSWORD) {
    db = new pg.Pool({
      database: localDbName,
      password: process.env.DB_PASSWORD
    })
  } else {
    db = new pg.Pool({
      database: localDbName
    })
  }
}

// const db = new pg.Pool({
//   database: process.env.DB_NAME || 'harrys_house'
// })

module.exports = db
