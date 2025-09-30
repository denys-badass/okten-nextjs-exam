import {NextRequest, NextResponse} from "next/server";

export function middleware(req: NextRequest) {
    const loginType = req.cookies.get('loginType')?.value;

    if (!loginType && req.nextUrl.pathname.startsWith('/movies')) {
        return Response.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}

export const config = {matcher: ['/movies/:path*']};