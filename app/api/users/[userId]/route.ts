import {NextRequest, NextResponse} from "next/server";
import { userService } from "@/app/api/users/UserService";
import { UserDto } from "@/app/types/UserDto";

export async function GET(request: NextRequest, context: { params: { userId: string } }): Promise<NextResponse> {
    const params = await context.params;
    if (!params.userId) {
        return NextResponse.json({ error: "Invalid request, missing user ID" }, { status: 400 });
    }
    try {
        const user: UserDto = await userService.getUser(params.userId) as UserDto;
        return NextResponse.json({ user });
    } catch {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
}
