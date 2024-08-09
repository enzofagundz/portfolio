export const useEducation = () => {
  return useState("education", () => {
    return {
      education: [
        {
          id: 1,
          course: "Ensino Médio",
          institution: "E. E. Prof. João Candido Fernandes Filho",
          period: "2017 - 2019",
          expectedConclusion: null,
        },
        {
          id: 2,
          course: "Técnico em Administração",
          institution: "Etec de Lins",
          period: "2019 - 2020",
          expectedConclusion: null,
        },
        {
          id: 3,
          course: "Sistemas para Internet",
          institution: "Fatec de Lins",
          period: "2021 - 2024",
          expectedConclusion: "junho/2024",
        },
      ] as EducationInfo[],
    };
  });
};

interface EducationInfo {
  id: number;
  course: string;
  institution: string;
  period: string;
  expectedConclusion: string | null;
}
