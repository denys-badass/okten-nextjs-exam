import {logoutUserAction} from "@/actions/auth";
import {NextRequest} from "next/server";

export async function GET(req: NextRequest) {
    await logoutUserAction();
    return Response.redirect(new URL('/login/form', req.url));
}