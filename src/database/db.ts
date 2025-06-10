import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.USERNAME as string;
const password = process.env.PASSWORD as string;

const connectDB = () => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: username,         
        password: password,  
        database: 'dashboardtravl'
    });

    connection.connect((err) => {
        if (err) {
            console.error('Error al conectar a MySQL:', err);
            process.exit(1);
        } else {
            console.log('MySQL conectado');
        }
    });

    return connection;
};

export default connectDB;