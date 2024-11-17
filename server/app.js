import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());

// Nodemailer transport
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error("Error verifying email:", error);
  } else {
    console.log("Ready to Send");
  }
});

// Contact route
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;

  const mail = {
    from: name,
    replyTo: email,
    to: "mohamadraihan660@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `,
  };

  try {
    await contactEmail.sendMail(mail);
    res.json({ code: 200, status: "Message Sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ code: 500, error: "Failed to send message" });
  }
});

// Export app for serverless function
export default app;
