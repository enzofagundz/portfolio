export const useWorkExperience = () => {
    return useState('workExperience', () => {
        return {
            workExperience: [
                {
                    id: 1,
                    company: "Sonnitech",
                    position: "Estagiário de Desenvolvimento Web",
                    period: "agosto/2023 - atual",
                    responsibilities: [
                        "Desenvolver funcionalidades novas e manutenção de sistemas web em Laravel, jQuery, Bootstrap, Vue.js e MySQL",
                        "Desenvolver APIs RESTful em Laravel e integrar com sistemas de terceiros",
                        "Utilizar Git para versionamento de código",
                        "Utilizar metodologias ágeis (Scrum e Kanban) para gerenciamento de projetos",
                        "Utilizar padrões de projeto e boas práticas de programação",
                    ]
                },
                {
                    id: 2,
                    company: "Copa Sabino",
                    position: "Gestor de Redes Sociais",
                    period: "abril/2020 - janeiro/2022",
                    responsibilities: [
                        "Planejar e criar conteúdo para redes sociais",
                        "Gerenciar anúncios",
                        "Responder clientes",
                        "Realizar atendimento ao cliente",
                        "Analisar métricas e criar relatórios",
                    ]
                },
                {
                    id: 3,
                    company: "Prefeitura Municipal de Sabino",
                    position: "Designer Gráfico Freelancer",
                    period: "setembro/2019 - março/2020",
                    responsibilities: [
                        "Criar artes para redes sociais",
                        "Criar artes para impressão",
                        "Criar identidade visual",
                        "Testar e validar artes em diferentes mídias",
                    ]
                }
            ] as WorkExperienceInfo[],
        }
    });
}

interface WorkExperienceInfo {
    id: number;
    company: string;
    position: string;
    period: string;
    responsibilities: string[];
}