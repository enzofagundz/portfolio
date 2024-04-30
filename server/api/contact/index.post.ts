import transporter from "~/server/utils/mail";
import emailTemplate from "~/server/utils/templateEmail";

export default defineEventHandler(async (event) => {
    const prisma = usePrisma();
    try {
        const body = await readBody(event);
        const { name, email, message } = body;

        if (!name || !email || !message) {
            throw createError({ statusCode: 400, statusMessage: "Bad Request" });
        }

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Contact Form Submission",
            html: emailTemplate({ name, email, message }),
        }

        const contact = await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(info);
                }
            })
        })

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
    } catch (error) {
        throw createError({ statusCode: 500, statusMessage: "Internal Server Error"})
    }
});