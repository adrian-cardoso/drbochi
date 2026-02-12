import { NextRequest, NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Store in database
    try {
      await prisma.contactSubmission.create({
        data: { name, email, phone, message },
      });
    } catch {
      console.log("Database unavailable, skipping storage");
    }

    // Send email notification via Resend
    const recipientEmail = process.env.CONTACT_EMAIL || "info@drbochi.com";
    const resend = getResend();
    if (resend) {
      await resend.emails.send({
        from: "Dr. Bochi Website <onboarding@resend.dev>",
        to: recipientEmail,
        subject: `New Contact Form: ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
    } else {
      console.log("Contact form submission (no RESEND_API_KEY):", {
        name,
        email,
        phone,
        message,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
