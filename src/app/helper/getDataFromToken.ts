import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken';

export function getDataFromToken(request: NextRequest) {
    try{
        const token = request.cookies.get('token')?.value || '';
        const decoded: any = jwt.verify(token, process.env.SECRET_TOKEN!);
        return decoded.id;
    }catch(error: any) {
        throw new Error(error.message)
    }
}