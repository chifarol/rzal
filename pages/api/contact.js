const nodemailer = require("nodemailer");

export default (req, res) => {
  const { name, email, phone, text } = req.body;
  let status = false;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "lyricslator@gmail.com",
      pass: "dhevafkryxopitdr",
    },
  });

  const mailOption = {
    from: `${email}`,
    to: "lyricslator@gmail.com",
    subject: `New message from a visitor @ rzal`,
    text: `
    Sender's Name: ${name}

    Sender's Email: ${email}

    Sender's Phone: ${phone}
    
    text: ${text}
    `,
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ emailStatus: false, msg: err });
    } else {
      console.log("mail sent");
      res.json({ emailStatus: true, msg: "mail sent" });
    }
  });
  console.log(name, email, text);
};
