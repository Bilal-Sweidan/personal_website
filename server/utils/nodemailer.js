const nodemailer = require('nodemailer')

const sanitizeHtml = require('sanitize-html');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'bilalsweidan2003@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD,
        debug: true, // Enable debugging
        logger: true, // Log output to console
    }
})

const sendEmail = async (name, senderEmail, subject, text) => {
    const safeName = sanitizeHtml(name);
    const safeEmail = sanitizeHtml(senderEmail);
    const safeSubject = sanitizeHtml(subject);
    const safeMessage = sanitizeHtml(text, {
        allowedTags: ['b', 'i', 'em', 'strong', 'br', 'p'], // يسمح فقط بعناصر بسيطة
        allowedAttributes: {} // لا يسمح بأي خصائص
    });
    console.log("email sender => ", safeEmail)
    const mailOption = {
        to: "bilalsweidan2003@gmail.com",
        from: "bilalsweidan2003@gmail.com",
        replyTo: safeEmail,
        subject: safeSubject,
        html: `
            <ul>
                <li>From: ${safeEmail}</li>
                <li>Name: <a href="mailTo">${safeName} </a></li>
                <li>Message: ${safeMessage}</li>
            </ul>
        `
    }

    try {
        const info = await transporter.sendMail(mailOption);
        console.log("Email sent:", info.response);
        return { success: true, info };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error };
    }
}

module.exports = { sendEmail }