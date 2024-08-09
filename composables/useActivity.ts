export const useActivity = () => {
  return useState("activity", () => {
    return {
      activities: [
        {
          id: 1,
          title: "Certificação em Inglês Instrumental",
          institution: "UEMA",
        },
        {
          id: 2,
          title: "Certificação em Atendimento ao Cliente",
          institution: "SEBRAE",
        },
        {
          id: 3,
          title: "Certificação em Marketing Digital",
          institution: "SEBRAE",
        },
        {
          id: 4,
          title: "Certificação em Fundamentos do Design Gráfico",
          institution: "Fundação Bradesco",
        },
        {
          id: 5,
          title:
            "Iniciação Científica sobre Protótipo de Aplicativo Acessível para o Ensino de Matemática através de Podcasts",
          institution: "Fatec de Lins",
        },
      ] as ActivityInfo[],
    };
  });
};

interface ActivityInfo {
  id: number;
  title: string;
  institution: string;
}
