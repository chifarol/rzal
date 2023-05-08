const nodemailer = require("nodemailer");

export default (req, res) => {
  const {
    name,
    email,
    phone,
    finalAdress,
    takeoffAddress,
    vehicle,
    vehiclePageFr,
    vehiclePage,
    startDate,
    returnDate,
    text,
  } = req.body;
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
    subject: `New care hire request from ${email} @ rzal`,
    text: `
    Vehicle:${vehicle}

    Vehicle Front Page:${vehiclePageFr}

    Vehicle Admin Page:${vehiclePage}

    Client Name: ${name}

    Client Email: ${email}

    Client Phone: ${phone}

    FinalAdress: ${finalAdress}

    TakeoffAddress: ${takeoffAddress}

    startDate: ${startDate}

    returnDate: ${returnDate}

    comments: ${text}
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
