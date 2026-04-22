import { NextResponse } from "next/server";
import { query } from "../../../lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function sanitize(value, max = 1000) {
  if (value === undefined || value === null) return null;
  const str = String(value).trim();
  if (!str) return null;
  return str.slice(0, max);
}

function isValidEmail(email) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
  const email = sanitize(body.email, 255);
  const phone = sanitize(body.phone, 50);
  const projectType = sanitize(body.projectType, 150);
  const message = sanitize(body.message, 5000);
  const source = sanitize(body.source, 100) || "contact_page";

  if (!fullName) {
    return NextResponse.json(
      { ok: false, error: "Full name is required." },
      { status: 400 }
    );
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "A valid email address is required." },
      { status: 400 }
    );
  }

  try {
    const result = await query(
      `INSERT INTO contact (full_name, email, phone, project_type, message, source)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [fullName, email, phone, projectType, message, source]
    );

    return NextResponse.json(
      { ok: true, id: result?.insertId ?? null },
      { status: 201 }
    );
  } catch (error) {
    console.error("[api/contact] DB insert failed:", error);
    return NextResponse.json(
      { ok: false, error: "Unable to save your message right now." },
      { status: 500 }
    );
  }
}
