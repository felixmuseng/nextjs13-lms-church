import { connectMongoDB } from "@/lib/mongodb";
import Event from "@/models/event";
import User from "@/models/user";
import { revalidatePath } from "next/cache";

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, date , user } = await req.json();
    await connectMongoDB();
    const userx = await User.findOne({ email: user.email });
    const datex = new Date(date)
    
    await Event.create({ name: name, date: datex, user: userx._id});
    revalidatePath('/calendar')
    revalidatePath('/notes')

    return NextResponse.json({ message: "Event created." }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}