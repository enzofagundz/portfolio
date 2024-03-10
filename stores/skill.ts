import { defineStore } from "pinia";
export const useSkillStore = defineStore("skill", {
  state: () => {
    return {
      skills: [
        { id: 1, name: "HTML", level: "Expert" },
        { id: 2, name: "CSS", level: "Expert" },
        { id: 3, name: "JavaScript", level: "Expert" },
        { id: 4, name: "Vue.js", level: "Expert" },
        { id: 5, name: "Laravel", level: "Intermediate" },
        { id: 6, name: "Node.js", level: "Intermediate" },
        { id: 7, name: "Express.js", level: "Intermediate" },
        { id: 8, name: "SQL", level: "Intermediate" },
        { id: 9, name: "Git", level: "Intermediate" },
        { id: 10, name: "Docker", level: "Beginner"},
        { id: 12, name: "C#", level: "Beginner" },
      ] as SkillInfo[],
    };
  },
});

interface SkillInfo {
  id: number;
  name: string;
  level: string;
}