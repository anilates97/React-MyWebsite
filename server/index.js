require("dotenv").config();

const nodemailer = require("nodemailer");

const allowedOrigins = (process.env.CORS_ORIGIN || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const corsMiddleware = require("cors")({
  origin: allowedOrigins.length ? allowedOrigins : true,
});

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const sanitizeHeader = (value) => String(value).replace(/[\r\n]/g, " ").trim();

const handler = async (req, res) => {
  corsMiddleware(req, res, async () => {
    if (req.method === "OPTIONS") {
      res.status(204).end();
      return;
    }

    if (req.method === "GET") {
      res.status(200).send("Server is ready!");
    } else if (req.method === "POST") {
      const { firstName, lastName, email, message, subject } = req.body || {};
      const requiredFields = [firstName, lastName, email, subject, message];

      if (requiredFields.some((field) => !field || !String(field).trim())) {
        res.status(400).json({ error: "All fields are required" });
        return;
      }

      const cleanEmail = sanitizeHeader(email);
      const name = `${firstName.trim()} ${lastName.trim()}`;

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
        res.status(400).json({ error: "A valid email address is required" });
        return;
      }

      if (!process.env.EMAIL_USERNAME || !process.env.EMAIL_PASSWORD) {
        res.status(500).json({ error: "Email service is not configured" });
        return;
      }

      const contactEmail = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mail = {
        from: process.env.EMAIL_USERNAME,
        replyTo: cleanEmail,
        to: process.env.CONTACT_RECEIVER_EMAIL || process.env.EMAIL_USERNAME,
        subject: `Portfolio Contact - ${sanitizeHeader(subject)}`,
        html: `<p>Name: ${escapeHtml(name)}</p>
               <p>Email: ${escapeHtml(email)}</p>
               <p>Subject: ${escapeHtml(subject)}</p>
               <p>Message: ${escapeHtml(message)}</p>`,
      };

      try {
        await contactEmail.sendMail(mail);
        res.status(200).json({ code: 200, status: "Message Sent" });
      } catch {
        res
          .status(500)
          .json({ error: "An error occurred while sending the email" });
      }
    } else {
      res.status(405).end();
    }
  });
};

module.exports = handler;

if (require.main === module) {
  const express = require("express");
  const app = express();
  const port = process.env.PORT || 3001;

  app.use(express.json());
  app.all("/", handler);

  app.listen(port, () => {
    console.log(`Contact server is running on http://localhost:${port}`);
  });
}
