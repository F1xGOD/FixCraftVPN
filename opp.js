import * as nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 465,
    secure: true,
    auth: {
      user: 'info@fixcraft.org',
      pass: '&DI8(2WD28'
    }
  });
  
  // Compose the email message
  const mailOptions = {
    from: 'info@fixcraft.org',
    to: "svyatvegas22@gmail.com",
    subject: 'FixCraft Verification',
    html: "Nigger Slave Simulator!"
  };
  
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });