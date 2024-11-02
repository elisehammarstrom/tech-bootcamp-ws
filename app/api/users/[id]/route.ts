import {NextResponse} from "next/server";
import {findPersonById} from "@/app/api/users/[id]/users.repository";
import {User} from "@/app/types/User";

export async function GET(request: Request, context: { params: { id: string } }): Promise<NextResponse> {
    console.log("trying to find person");
    console.log("----------------------------------------")
    const params = await context.params;
    console.log(params.id)
    console.log("----------------------------------------")

    if (!params.id) {
        return NextResponse.json({ error: "Invalid request, missing user ID" }, { status: 400 });
    }
    const user: User | null = await findPersonById(params.id);
    return NextResponse.json(user);
}