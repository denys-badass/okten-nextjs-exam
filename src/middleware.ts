import {NextRequest, NextResponse} from "next/server";

export function middleware(req: NextRequest) {
    const loginType = req.cookies.get("loginType")?.value;

    console.log("Middleware - loginType:", loginType);
    console.log("Middleware - pathname:", req.nextUrl.pathname);

    if (!loginType && req.nextUrl.pathname.startsWith("/movies")) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

export const config = {matcher: ["/movies/:path*"]};