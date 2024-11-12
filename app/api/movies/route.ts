// import {NextResponse} from "next/server";

// export async function GET(request: Request): Promise<NextResponse> {
//     const url = new URL(request.url);
//     const partialTitle = url.searchParams.get('title');
//     return NextResponse.json({ partialTitle });
// }

import {NextRequest, NextResponse} from "next/server";
import {movieService} from "@/app/api/movies/movieService";

export async function GET(request: NextRequest): Promise<NextResponse> {
    const partialTitle = request.nextUrl.searchParams.get("title")
    if (!partialTitle) {
        return NextResponse.json({ error: "Missing title query parameter" }, { status: 400 });
    }
    const matchingMovies = await movieService.searchByTitle(partialTitle); // <--- HERE
    return NextResponse.json(matchingMovies); // <--- AND RETURNING HERE
}