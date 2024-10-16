
import 'server-only'; 
// any Client Component that imports a function here defined will receive a build-time error explaining that this module can only be used on the server.
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { eq } from 'drizzle-orm'
import { db } from '@/db/db';
import {users, wishlists} from "@/db/schema";
// import * as schema from "@/db/schema";
import { User } from '@/types/types';



const SECRET = process.env.JWT_SECRET as string;
// --------- Token ---------:
export const createJWT = (userId: string) => {
  const token = jwt.sign({ id: userId }, SECRET);
  console.log("creating token");
  return token;
};

// --------- Get userId  from token ----------:

export const getUserFromJWT = async (token: {
    name: string,
    value: string
}) => {
    const payload = jwt.verify(token.value, SECRET) as { id: string };
    const a = db.query;
    const user = await db.query.users.findFirst({
        where: eq(users.id, payload.id),
        columns: {
            id: true,
            email: true,
            createdAt: true,
            password: false
        }
    })
    return user;
}

// ---------- Signin user -----------------
export const signin = async ({
    email,
    password
}: {
    email: string,
    password: string
    }) => { 
  
    const match = await db.query.users.findFirst({
        where: eq(users.email, email),
    })

    if (!match) throw new Error('Invalid user. Please register');

    const checkPassword = await comparePassword(password, match.password);

    if (!checkPassword) {
        throw new Error('Password is incorrect')
    }

    const token = createJWT(match.id);
    const { password: checkedPassword, ...user } = match //exclude password

    return {user, token}
}


export const register = async ({
    email,
    password
}: {
    email: string,
    password: string
    }) => { 
    
    const hashedPassword = await hashPassword(password);
    const addUser = await db.insert(users)
        .values({ email, password: hashedPassword })
        .returning({
            id: users.id,
            email: users.email,
            createdAt: users.createdAt,
        })
    const user = addUser[0];
    const token = createJWT(user.id)

    return {user, token}
}

export const hashPassword = (password: string) => {
    return bcrypt.hash(password, 12)
}

export const comparePassword = (password: string, hashedPassword: string) => {
    return bcrypt.compare(password, hashedPassword)
}

