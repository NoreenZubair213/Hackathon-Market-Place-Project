import { NextResponse } from 'next/server';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export async function GET() {
  if (!projectId || !dataset || !apiVersion) {
    return NextResponse.json({ error: "Sanity credentials are missing!" }, { status: 500 });
  }

  const query = encodeURIComponent('*[_type == "product"]');
  const url = `https://${projectId}.api.sanity.io/${apiVersion}/data/query/${dataset}?query=${query}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch products");

    const data = await res.json();
    return NextResponse.json(data.result);
  } catch (error: any) {  // TypeScript ko error type batana zaroori hai
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  
}

