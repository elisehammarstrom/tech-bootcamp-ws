import {NextResponse} from "next/server";
import { userRepository } from "@/app/api/users/usersRepository";
import { User } from "@/app/types/User";

export async function GET(request: Request, context: { params: { id: string } }): Promise<NextResponse> {
    const params = await context.params;
    if (!params.id) {
        return NextResponse.json({ error: "Invalid request, missing user ID" }, { status: 400 });
    }
    const user: User = await userRepository.findUserById(params.id) as User;
    return NextResponse.json({ user});
}