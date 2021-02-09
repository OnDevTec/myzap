const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'miguel@wabemaxcafe.com.br',
    pass: 'cacoal123' // naturally, replace both with your real credentials or an application-specific password
  }
});

module.exports = (text = '') => {
    const mailOptions = {
        from: 'miguel@wabemaxcafe.com.br',
        to: 'miguelarcjunior@gmail.com, adelcio@ondoctor.app',
        subject: 'API MYZAP | Status do Envio Mensagem via Whatsapp',
        text
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}