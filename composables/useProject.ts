type Project = {
    readonly id: number;
    readonly title: string;
    readonly description: string;
    readonly semester: string;
    readonly technologies: readonly string[];
    readonly link: string | null;
    readonly areas: readonly string[];
    readonly folder?: string;
    readonly quantityImages?: number;
};

export const useProject = () => {
    const projects = ref<Project[]>([
        {
            id: 1,
            title: "Seminário Internet das Coisas",
            description: "Projeto de pesquisa sobre Internet das Coisas",
            semester: "1º semestre",
            technologies: [
                "HTML",
                "CSS",
            ],
            link: "https://www.github.com/enzofagundz/seminario-iot",
            areas: [
                "Front-end",
            ],
            folder: "seminario-iot",
            quantityImages: 4,
        },
        {
            id: 2,
            title: "Pizza Queen",
            description: "Projeto de desenvolvimento de um sistema de delivery de pizzas",
            semester: "2º semestre",
            technologies: [
                "HTML",
                "CSS",
                "Flexbox",
                "Grid Layout",
            ],
            link: "https://www.github.com/enzofagundz/pizza-queen",
            areas: [
                "Front-end",
                "Design",
                "UI/UX",
            ],
            folder: "pizza-queen",
            quantityImages: 3,
        },
        {
            id: 3,
            title: "Séance E-commerce",
            description: "Projeto de desenvolvimento de um e-commerce de cadeiras",
            semester: "3º semestre",
            technologies: [
                "HTML",
                "CSS",
                "Flexbox",
                "Grid Layout",
                "JavaScript",
            ],
            link: "https://www.github.com/enzofagundz/seance-ecommerce",
            areas: [
                "Front-end",
                "Design",
                "UI/UX",
                "Acessibilidade",
            ],
            folder: "seance-ecommerce",
            quantityImages: 5,
        },
        {
            id: 4,
            title: "Banco de Dados para Gerenciamento de Atletas de Futebol",
            description: "Projeto de desenvolvimento de um banco de dados para gerenciamento de atletas de futebol",
            semester: "4º semestre",
            technologies: [
                "MySQL",
            ],
            link: "https://www.github.com/enzofagundz/bd-gerenciamento-atletas-futebol",
            areas: [
                "Banco de Dados",
            ],
            folder: "bd-gerenciamento-atletas-futebol",
            quantityImages: 0,
        },
        {
            id: 5,
            title: "Payzone",
            description: "Projeto de desenvolvimento de um sistema para a gestão de folha de pagamento",
            semester: "5º semestre",
            technologies: [
                "Laravel",
                "PHP",
                "MySQL",
                "Tailwind CSS",
            ],
            link: "https://www.gitlab.com/enzofagundz/payzone",
            areas: [
                "Back-end",
                "Banco de Dados",
            ],
            folder: "payzone",
            quantityImages: 6,
        },
        {
            id: 6,
            title: "Servidor Gitlab para controle de versão de projetos",
            description: "Projeto de instalação e configuração do GitLab para controle de versão e colaboração em projetos de software",
            semester: "6º semestre",
            link: null,
            technologies: [
                "GitLab",
                "Bitnami",
                "Oracle VM VirtualBox",
                "SSH"
            ],
            areas: [
                "Controle de Versão",
                "DevOps",
                "Colaboração em Equipe"
            ],
            folder: "servidor-gitlab",
            quantityImages: 0
        }
    ] as const);

    const getProjectById = (id: number) => {
        return projects.value.find(project => project.id === id);
    }

    return {
        projects,
        getProjectById,
    }
}