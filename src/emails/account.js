const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

const sendWelcomeEmail =  (email, name) => {
    sgMail.send({
        to: email,
        from: email,
        subject:`Wellcome ${name}`,
        text:`thanks for joining our appliction ${name}`
    })
}

const deleteAccountEmail =  (email, name) => {
    sgMail.send({
        to: email,
        from: email,
        subject:`${process.env.COMP} We will miss you in our community!`,
        text:`Thanks ${name} for using our application we hope to see you!`
    })
}



module.exports = {
    sendWelcomeEmail,
    deleteAccountEmail
}


