const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

module.exports = async (req, res) => {
  cors(req, res, async () => {
    if (req.method === "GET") {
      res.status(200).send("Server is ready!");
    } else if (req.method === "POST") {
      const { firstName, lastName, email, message, phone } = req.body;
      const name = firstName + lastName;

      const contactEmail = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mail = {
        from: name,
        to: "********@gmail.com",
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Message: ${message}</p>`,
      };

      try {
        await contactEmail.sendMail(mail);
        res.status(200).json({ code: 200, status: "Message Sent" });
      } catch (error) {
        res
          .status(500)
          .json({ error: "An error occurred while sending the email" });
      }
    } else {
      res.status(405).end();
    }
  });
};
