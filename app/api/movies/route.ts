import {NextRequest, NextResponse} from "next/server";
import {omdbClient} from "@/app/api/movies/omdbClient";

export async function GET(request: NextRequest): Promise<NextResponse> {
    const partialTitle = request.nextUrl.searchParams.get("title")
    if (!partialTitle) {
        return NextResponse.json({ error: "Missing title query parameter" }, { status: 400 });
    }
    const matchingMovies = await omdbClient.searchByTitle(partialTitle);
    return NextResponse.json(matchingMovies);
}