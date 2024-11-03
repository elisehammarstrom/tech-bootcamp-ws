import {NextResponse} from "next/server";
import { userRepository } from "@/app/api/users/usersRepository";
import { UserResponse } from "@/app/types/UserResponse";

export async function GET(request: Request, context: { params: { id: string } }): Promise<NextResponse> {
    const params = await context.params;
    if (!params.id) {
        return NextResponse.json({ error: "Invalid request, missing user ID" }, { status: 400 });
    }
    const user: UserResponse = await userRepository.findUserById(params.id);
    return NextResponse.json({ user});
}