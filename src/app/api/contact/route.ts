import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;

export async function POST(request: Request) {
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    return NextResponse.json(
      {
        error:
          "Mail servisi yapılandırılmamış. SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS ve CONTACT_TO_EMAIL ortam değişkenlerini ayarlayın.",
      },
      { status: 500 }
    );
  }

  const body = await request.json();
  const { ad, email, telefon, mesaj } = body;

  if (!ad || !email || !mesaj) {
    return NextResponse.json({ error: "Lütfen ad, email ve mesaj alanlarını doldurun." }, { status: 400 });
  }

  const smtpPort = Number(SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: smtpPort,
    secure: smtpPort === 465,
    requireTLS: smtpPort !== 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    tls: smtpPort === 587 ? { ciphers: "SSLv3" } : undefined,
  });

  const mailOptions = {
    from: CONTACT_FROM_EMAIL,
    to: CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `Yeni mesaj: ${ad}`,
    text: `Ad Soyad: ${ad}\nEmail: ${email}\nTelefon: ${telefon || "-"}\n\nMesaj:\n${mesaj}`,
    html: `
      <p><strong>Ad Soyad:</strong> ${ad}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${telefon || "-"}</p>
      <hr />
      <p><strong>Mesaj:</strong></p>
      <p>${mesaj.replace(/\n/g, "<br />")}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact mail error:", error);
    return NextResponse.json(
      { error: "Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }
}
