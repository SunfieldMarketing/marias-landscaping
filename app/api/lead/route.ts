import { NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  zip?: string;
  service?: string;
  message?: string;
  source?: string;
};

function isValidPhone(phone: string) {
  return /^[\d\s()+-]{7,20}$/.test(phone);
}

export async function POST(request: Request) {
  let data: LeadPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = (data.name || "").trim();
  const phone = (data.phone || "").trim();

  if (!name || name.length < 2) {
    return NextResponse.json(
      { ok: false, error: "Please enter your name." },
      { status: 400 }
    );
  }

  if (!phone || !isValidPhone(phone)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid phone number." },
      { status: 400 }
    );
  }

  // No third-party API key is required for this route to work and deploy on
  // Vercel out of the box. The lead is logged to the server console/log
  // stream. To forward leads to email or a CRM, add a provider (e.g. Resend,
  // SendGrid, or a webhook URL) and its API key as a Vercel environment
  // variable, then send the payload below to that provider here.
  console.log("New lead submitted:", {
    ...data,
    name,
    phone,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
