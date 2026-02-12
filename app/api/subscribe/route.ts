import { NextRequest, NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Store subscriber in database
    try {
      await prisma.subscriber.create({ data: { email } });
    } catch {
      // Unique constraint = already subscribed, that's fine
      console.log("Subscriber already exists or DB unavailable");
    }

    // Send welcome email via Resend
    const resend = getResend();
    if (resend) {
      await resend.emails.send({
        from: "Dr. Bochi <onboarding@resend.dev>",
        to: email,
        subject: "Welcome to Dr. Bochi's Newsletter",
        html: `
          <h2>Thank you for subscribing!</h2>
          <p>You'll receive wellness tips and practice updates from Dr. Alena Bochi, ND.</p>
          <p>Warm regards,<br/>Dr. Bochi's Office</p>
        `,
      });
    } else {
      console.log("New subscriber (no RESEND_API_KEY):", email);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
