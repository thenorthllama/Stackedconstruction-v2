import { NextResponse } from "next/server";

const CONTACT_WEBHOOK_URL =
  process.env.CONTACT_WEBHOOK_URL ??
  "https://northllama.app.n8n.cloud/webhook/e0af1757-dba4-4d4f-98e2-0d2c2d5bd01c";

const CONTACT_WEBHOOK_USER = process.env.CONTACT_WEBHOOK_USER ?? "stackedConstruction";
const CONTACT_WEBHOOK_PASS =
  process.env.CONTACT_WEBHOOK_PASS ??
  "__n8n_BLANK_VALUE_e5362baf-c777-4d57-a609-6eaf1f9e87f6";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, message, budget, service } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    const credentials = Buffer.from(
      `${CONTACT_WEBHOOK_USER}:${CONTACT_WEBHOOK_PASS}`
    ).toString("base64");

    const response = await fetch(CONTACT_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message: message || "",
        budget: budget || "",
        service: service || "",
        source: "stackedconstruction.co",
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      console.error("Webhook error:", response.status, await response.text());
      return NextResponse.json(
        { error: "Failed to submit form. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
