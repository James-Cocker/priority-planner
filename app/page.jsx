import React from "react";
// import mysql from 'mysql2/promise';

// // Example code - sql not here yet
// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   connectionLimit: 10, // Adjust as needed
// });

export default function HomePage() {
  return (
    <div>
      <h1>Please Login</h1>
      <form>
        <label for="email">Email:</label><br/>
        <input type="text" id="email" name="email"/><br/>
        <label for="lname">Password:</label><br/>
        <input type="text" id="password" name="password"/><br/>
        <input type="submit"/> {/* onClick={checkUsers}/>*/}
      </form>
    </div>
  );
}

async function checkUsers(req, res) {
  try {
    const [rows] = await pool.execute('SELECT * FROM users WHERE id = ?', [req.query.userId]);

    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  } finally {
    pool.end(); // Close the connection pool
  }
}