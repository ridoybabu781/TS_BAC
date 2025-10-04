import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});
export const sendMail = async (email, subject, html) => {
    const mailerOption = {
        from: "BAC_Commerce",
        to: email,
        subject,
        html,
    };
    return transporter.sendMail(mailerOption);
};
//# sourceMappingURL=sendMail.js.map