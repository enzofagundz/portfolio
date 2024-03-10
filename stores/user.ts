import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      // for initially empty lists
      userList: [] as UserInfo[],
      // for data that is not yet loaded
      user: null as UserInfo | null,
      count: 0,
    };
  },
});

interface UserInfo {
  name: string;
  age: number;
}
