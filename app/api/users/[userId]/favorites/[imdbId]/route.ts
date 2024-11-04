import {NextRequest, NextResponse} from "next/server";
import {favoriteRepository} from "@/app/api/users/[userId]/favorites/FavoriteRepository";

export async function GET(request: NextRequest, context: { params: { userId: string, imdbId: string} }): Promise<NextResponse> {
    const params = context.params;
    if (!params.userId || !params.imdbId) {
        return NextResponse.json({ error: "Invalid request, missing userId or imdbId" }, { status: 400 });
    }
    favoriteService
    return NextResponse.json({  });
}