export const useProject = () => {
    return useState('projects', () => {
        return {
            projects: [
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
                    ]
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
                    ]
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
                    ]
                },
                {
                    id: 4,
                    title: "Projeto de Banco de Dados para Gerenciamento de Atletas de Futebol",
                    description: "Projeto de desenvolvimento de um banco de dados para gerenciamento de atletas de futebol",
                    semester: "4º semestre",
                    technologies: [
                        "MySQL",
                    ],
                    link: "https://www.github.com/enzofagundz/bd-gerenciamento-atletas-futebol",
                    areas: [
                        "Banco de Dados",
                    ]
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
                    ]
                }
            ] as ProjectInfo[],
        }
    });
}

interface ProjectInfo {
    id: number;
    title: string;
    description: string;
    semester: string;
    technologies: string[];
    link: string;
    areas: string[];
}