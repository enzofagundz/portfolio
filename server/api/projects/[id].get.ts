import { useProject } from "~/composables/useProject";

export default defineEventHandler(async (event) => {
    const id = parseInt(getRouterParam(event, "id") || "0");

    if (!id) {
        throw createError({ statusCode: 400, statusMessage: "Bad Request" });
    }

    const projectsComposable = useProject();
    console.log("projectsComposable", projectsComposable);
    try {
    } catch (error) {
        throw createError({ statusCode: 500, statusMessage: "Internal Server Error" });
    }
});