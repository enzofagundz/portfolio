import { usePrisma } from "~/server/utils/PrismaClient";
export default defineEventHandler(async (event) => {
    const prisma = usePrisma();
    try {
        const body = await readBody(event);
        const { name, email, message } = body;

        if (!name || !email || !message) {
            throw createError({ statusCode: 400, statusMessage: "Bad Request" });
        }

        const contact = await prisma.contact.create({
            data: {
                name,
                email,
                message
            }
        })

        if (!contact) {
            throw createError({ statusCode: 500, statusMessage: "Internal Server Error" });
        }

        return {
            statusCode: 201,
            body: {
                message: "Contact created successfully",
                data: contact
            }
        }
    } catch (error) {
        throw createError({ statusCode: 500, statusMessage: "Internal Server Error"})
    }
});