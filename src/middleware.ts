import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const token = request.cookies.get("token")?.value || '';

    const publicPath = path === '/login' || path === '/signup';

    if(publicPath && token) {
        return NextResponse.redirect(request.nextUrl.origin);
    }

    if(!publicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }
}

export const config = {
    matcher: ["/", "/login", "/signup"],
};