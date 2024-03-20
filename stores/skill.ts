import { defineStore } from "pinia";
export const useSkillStore = defineStore("skill", {
  state: () => {
    return {
      skills: [
        { id: 1, name: "HTML", icon: "mdi:language-html5" },
        { id: 2, name: "CSS", icon: "mdi:language-css3" },
        { id: 3, name: "JavaScript", icon: "mdi:language-javascript" },
        { id: 4, name: "Vue.js", icon: "mdi:vuejs" },
        { id: 5, name: "Laravel", icon: "mdi:laravel" },
        { id: 6, name: "Node.js", icon: "mdi:nodejs" },
        { id: 7, name: "Express.js", icon: "simple-icons:express" },
        { id: 8, name: "SQL", icon: "mdi:database" },
        { id: 9, name: "Git", icon: "mdi:git" },
        { id: 10, name: "Docker", icon: "mdi:docker" },
        { id: 11, name: "PHP", icon: "mdi:language-php" },
        { id: 12, name: "GitLab", icon: "mdi:gitlab" },
      ] as SkillInfo[],
    };
  },
});

interface SkillInfo {
  id: number;
  name: string;
  icon: string;
}