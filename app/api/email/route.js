import { NextResponse } from "next/server";
import { sendMail } from "@/app/libs/sendMail";

export async function POST(request) {
  try {
    const { subject, email, message } = await request.json();

    const data = { subject, email, message };
    // console.log(data);

    await sendMail(subject, email, message);

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
