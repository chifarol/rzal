const nodemailer = require("nodemailer");
const axios = require("axios");

export default async (req, res) => {
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

  const createBooking = {
    status: "publish",
    title: `${vehicle.title.rendered} ordered by ${name}`,
    fields: {
      vehicle_ordered: vehicle.id,
      full_name: name,
      email: email,
      phone_number: phone,
      takeoff_address: finalAdress,
      final_address: takeoffAddress,
      pickup_date: startDate,
      return_date: returnDate,
    },
  };

  const bookingRes = await axios
    .post(
      process.env.NEXT_PUBLIC_BACKEND_SERVER_URL +
        `/wp-json/wp/v2/vehicle_bookings`,
      createBooking,
      {
        auth: {
          username: "ilodigwechinaza@gmail.com",
          password: "Sz1f XTSX WuiG 3Zvz TAid BL0m",
        },
      }
    )
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "lyricslator@gmail.com",
      pass: "dhevafkryxopitdr",
    },
  });

  const mailOption = {
    from: `${email}`,
    to: "ritzassociateslimited@gmail.com",
    subject: `New care hire request from ${email} @ rzal`,
    text: `
    Vehicle:${vehicle.title.rendered}

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
      // res.json({ emailStatus: false, msg: err });
    } else {
      console.log("mail sent");
      res.json({ emailStatus: true, msg: "mail sent" });
    }
  });

  mailOption.to = "lyricslator@gmail.com";
  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ emailStatus: false, msg: err });
    } else {
      console.log("mail sent");
      res.json({ emailStatus: true, msg: "mail sent" });
    }
  });
};
