import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest, response: NextResponse) {
    console.log(request.method);
    
    try {
        const response = NextResponse.json({
            message: 'Log out successful',
            success: true,
        })

        // Clear the "token" cookie
        response.cookies.set('token', "", {
            httpOnly: true,
            expires: new Date(0) // Expire immediately
        })

        return response;
    } catch (error: any) {
        console.error('Error in logout API:', error);
        return NextResponse.json({
            message: error.message,
            success:false,
        })
    }
}