import emailTemplate from "~/server/utils/templateEmail";
import  { Resend } from 'resend';

export default defineEventHandler(async (event) => {
    let body;
    try {
        body = await readBody(event);
    } catch (error) {
        console.error('Error reading body:', error);
        throw createError({ statusCode: 500, statusMessage: "Internal Server Error"});
    }

    const { name, email, message } = body;

    if (!name || !email || !message) {
        throw createError({ statusCode: 400, statusMessage: "Bad Request" });
    }

    let contact;
    try {
        const resend = new Resend(process.env.API_RESEND_KEY);
        contact = await resend.emails.send({
            from: process.env.RESEND_EMAIL ?? '',
            to: process.env.EMAIL_USER ?? '',
            subject: "New Contact Form Submission",
            html: emailTemplate({ name, email, message }),
        });
    } catch (error) {
        console.error('Error sending email:', error);
        throw createError({ statusCode: 500, statusMessage: "Internal Server Error"});
    }

    if (!contact) {
        throw createError({ statusCode: 500, statusMessage: "Internal Server Error" });
    }

    return {
        statusCode: 201,
        body: {
            message: "Success! Your message has been sent.",
            data: contact
        }
    }
});