"use server";


import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest): Promise<Response> {
    const { secret, tag } = await request.json();

    if (typeof secret !== 'string') {
        return NextResponse.json({ message: 'Missing secret' }, { status: 400 });
    }
    if (secret !== process.env.REVALIDATE_CACHE_SECRET_TOKEN) {
        return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    if (typeof tag !== 'string') {
        return NextResponse.json({ message: 'Missing or invalid tag param' }, { status: 400 });
    }
    console.log(`revalidating ${tag}`)
    revalidateTag(tag);

    return NextResponse.json({ revalidated: true, now: Date.now() }, {status: 200});
}