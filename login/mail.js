const nodemailer = require("nodemailer");

// async function sendMail(formData)
// {
//     const transporter= nodemailer.createTransport({
//          service:'gmail',
//          auth:{
//              user:'amankeenable@gmail.com',
//              pass:'vvnlpdyidktwuklt'
//          }
//      })
 
//      const mailOptions = {
//          from: 'amankeenable@gmail.com',
//          to:formData.email,
//          subject:'Thank your Secret Santa for auspicious gift ',
//          text:`Hloo ${formData.firstname} ${formData.lastname}, your secret santa on this christmas is ${formData.naam}`,
//      }
 
//      try {
//         const result= await transporter.sendMail(mailOptions)
//         console.log('email sent')
//      } catch (error) {
//          console.log(error);
//      }
//  }


async function sendMail(santaname,email,firstname,lastname){
   const transporter= nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'amankeenable@gmail.com',
            pass:'vvnlpdyidktwuklt'
        }
    })

    const mailOptions = {
        from: 'amankeenable@gmail.com',
        to:email,
        subject:'Thank your Secret Santa for auspicious gift ',
        text:`Hloo ${firstname} ${lastname}, your secret santa on this christmas is ${santaname}`,
    }

    try {
       const result= await transporter.sendMail(mailOptions)
       console.log('email sent')
    } catch (error) {
        console.log(error);
    }
}
// Export mail function
module.exports = sendMail;