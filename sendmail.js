const nodemailer = require('nodemailer');
const fs = require('fs');

async function sendmail() {
  const reportPath = './allure-report/index.html';

  if (!fs.existsSync(reportPath)) {
    console.error("❌ Allure report not found at:", reportPath);
    return;
  }

  let transporter = nodemailer.createTransportt({
    service: 'gmail',
    auth: {
      user: 'kasikumarpoguluri@gmail.com',
      pass: 'vtiu elrn wwcs sswm', // App-specific password
    },
  });

  const mailOptions = {
    from: 'kasikumarpoguluri@gmail.com',
    to: 'p.kasikumar013@gmail.com',
    subject: 'Playwright Allure Test Report',
    text: 'Attached is the latest Allure test report.',
    attachments: [
      {
        filename: 'allure-report.html',
        path: reportPath,
        contentType: 'text/html',
      },
    ],
  };

  try {
    await transporter.sendmail(mailOptions);
    console.log('✅ Allure Report emailed successfully!');
  } catch (err) {
    console.error('❌ Failed to send email:', err);
  }
}

sendmail();

