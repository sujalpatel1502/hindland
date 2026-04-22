import { NextResponse } from "next/server";
import { query } from "../../../lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const BROCHURE_URL =
  "https://storage.googleapis.com/art-docs/Hindland%20Profile.pdf.pdf";

function sanitize(value, max = 1000) {
  if (value === undefined || value === null) return null;
  const str = String(value).trim();
  if (!str) return null;
  return str.slice(0, max);
}

function isValidEmail(email) {
  if (!email) return true;
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  if (!phone) return false;
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const fullName = sanitize(body.fullName, 255);
  const phone = sanitize(body.phone, 50);
  const email = sanitize(body.email, 255);
  const company = sanitize(body.company, 255);
  const reason = sanitize(body.reason, 2000);
  const source = sanitize(body.source, 100) || "brochure_modal";

  if (!fullName) {
    return NextResponse.json(
      { ok: false, error: "Full name is required." },
      { status: 400 }
    );
  }
  if (!phone || !isValidPhone(phone)) {
    return NextResponse.json(
      { ok: false, error: "A valid phone number is required." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  try {
    const result = await query(
      `INSERT INTO brochure_users (full_name, phone, email, company, reason, source)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [fullName, phone, email, company, reason, source]
    );

    return NextResponse.json(
      {
        ok: true,
        id: result?.insertId ?? null,
        brochureUrl: BROCHURE_URL,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[api/brochure] DB insert failed:", error);
    return NextResponse.json(
      { ok: false, error: "Unable to process your request right now." },
      { status: 500 }
    );
  }
}
