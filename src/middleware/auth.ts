import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

type User = {
    username: string;
    password: string;
};

const user: User = {
    username: "admin",
    password: "admin", 
};

const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_EXPIRES_IN: string = process.env.JWT_EXPIRES_IN ?? '1h';

const expiresIn = JWT_EXPIRES_IN as jwt.SignOptions['expiresIn'];

export function login(username: string, password: string): string | null {
    if (username === user.username && password === user.password) {

        const token = jwt.sign({ username }, JWT_SECRET, { expiresIn });

        return token;
    }
    return null;
}

export function verifyToken(token: string) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}