import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { id } = await req.json();
    await connectMongoDB();
    const task = await Task.findOne({"_id" : id})
    console.log(task);
    return NextResponse.json(task);
  } catch (error) {
    console.log(error);
  }
}