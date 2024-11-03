import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
    const partialTitle = request.nextUrl.searchParams.get("title")
    return NextResponse.json({ partialTitle });
}