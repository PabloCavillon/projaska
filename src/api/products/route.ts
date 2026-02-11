import { db } from "@vercel/postgres"
import { NextResponse } from "next/server";


export const GET = async () => {

    const client = await db.connect();

    try {
        const products = await client.query('SELECT * FROM products');
        return NextResponse.json({data: products.rows}, {status: 200})
    }
    catch (error) {
        return NextResponse.json({error: "Failed to fetch products"}, {status: 500})
    }

}