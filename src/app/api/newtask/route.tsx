import { connectMongoDB } from "@/lib/mongodb";

import Task from "@/models/task";
import User from "@/models/user";
import { revalidatePath } from "next/cache";

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, date , user, questions } = await req.json();
    await connectMongoDB();
    const userx = await User.findOne({ email: user.email });
    const datex = new Date(date)
    

    const taskx = await Task.create({ name: name, date: datex, user: userx._id, questions: questions});
    revalidatePath('/calendar')
    revalidatePath('/notes')

    console.log(questions)

    return NextResponse.json({ message: "Event created." }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}