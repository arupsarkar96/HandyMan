import mysql from 'mysql2/promise';

const pool: mysql.Pool = mysql.createPool({
    uri: process.env.MYSQL,
    charset: 'utf8mb4',
    waitForConnections: true,
    queueLimit: 10,
    multipleStatements: true,
});

export default pool;
