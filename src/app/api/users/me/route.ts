import { getDataFromToken } from "@/app/helper/getDataFromToken";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/model/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
    try{
        const id = await getDataFromToken(request);
        const user = await User.findOne({_id: id}).select("-password");
        return NextResponse.json({
            message: 'user was returned successful',
            data: user
        });
    }catch(error: any) {
        console.log(error);
        return NextResponse.json({
            message: error.message,
            status:400
        });
    }
}