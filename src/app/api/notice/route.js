import { NextResponse } from 'next/server';
import { connectDB } from '@/library/mongodb';

export async function GET() {
    try {
        const db = (await connectDB).db('Dev-Master');
        const collection = db.collection('notice');
        const result = await collection.find({}).toArray();

        return NextResponse.json({ success: true, data: result });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
}