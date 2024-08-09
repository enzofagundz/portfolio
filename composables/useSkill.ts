export const useSkill = () => {
  return useState("skill", () => {
    return {
      skills: [
        { id: 1, name: "Vue.js", icon: "mdi:vuejs" },
        { id: 2, name: "Laravel", icon: "mdi:laravel" },
        { id: 3, name: "Express.js", icon: "simple-icons:express" },
        { id: 4, name: "SQL", icon: "mdi:database" },
        { id: 5, name: "Git", icon: "mdi:git" },
        { id: 6, name: "PHP", icon: "mdi:language-php" },
      ] as SkillInfo[],
    };
  });
};

interface SkillInfo {
  id: number;
  name: string;
  icon: string;
}
