import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectMongoDB();
    const tasks = await Task.find({}).exec();
    console.log(tasks)
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
  }
}