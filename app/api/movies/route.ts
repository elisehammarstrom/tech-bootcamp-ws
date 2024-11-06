import {NextRequest, NextResponse} from "next/server";
import {movieService} from "@/app/api/movies/MovieService";

export async function GET(request: NextRequest): Promise<NextResponse> {
    const partialTitle = request.nextUrl.searchParams.get("title")
    if (!partialTitle) {
        return NextResponse.json({ error: "Missing title query parameter" }, { status: 400 });
    }

    const { userId } = await request.json();
    if (!userId) {
        return NextResponse.json({ error: "Missing userId in request body" }, { status: 400 });
    }
    console.log(partialTitle, userId);
    const matchingMovies = await movieService.searchByTitle(partialTitle, userId);
    return NextResponse.json(matchingMovies);
}