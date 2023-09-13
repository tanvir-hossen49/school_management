import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/model/userModel";

connect();

export async function POST(request: NextRequest, response: NextResponse){
    try{
        const reqBody = await request.json();
        
        const {username, password} = reqBody;        
        
        //check user exit or not
        const user = await User.findOne({username});

        if(!user){
            return NextResponse.json({
               message: "user not exit with this name",
               status: 404,
               success: false
            })
        }

        //check password is match
        const validPassword = await bcryptjs.compare(password, user.password)
        if(!validPassword) {
            return NextResponse.json({
                message: "password not match",
                status: 404,
                success: false,
            })
        }

        //create token
        const tokenData = {
            id: user._id,
            username: user.username,
        }
        
        const token = await jwt.sign(tokenData, process.env.SECRET_TOKEN!, {expiresIn: '1d'})

        //set response
        const response = NextResponse.json({
            message: "Login successful",
            status:200,
            success: true,
        });
        
        //set cookies
        response.cookies.set('token', token, { httpOnly: true })

        return response;
    }catch(error: any){
        console.log('Error: login failed', error);
        return NextResponse.json({
            message: error.message,
            success: false,
        })
    }
}