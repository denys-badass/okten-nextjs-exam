import {logoutUserAction} from "@/actions/auth";
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
    await logoutUserAction();
    return NextResponse.redirect(new URL('/login/form', req.url));
}