import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    language: 'it',
    page: {}
  }),
});
