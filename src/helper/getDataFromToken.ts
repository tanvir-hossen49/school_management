import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken';

export function getDataFromToken(request: NextRequest) {
    try{
        const token = request.cookies.get('token')?.value || '';
        const decoded: any = jwt.verify(token, process.env.SECRET_TOKEN!);
        return decoded.id;
    }catch(error: any) {
        if (error instanceof jwt.JsonWebTokenError) {
        // Handle invalid token
        console.error('Invalid token:', error.message);
        } else {
        // Handle other errors
        console.error('JWT verification error:', error.message);
        }
        throw new Error('JWT verification failed');
    }
}