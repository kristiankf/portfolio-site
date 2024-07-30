export const useThemeStore = defineStore("themeStore", {
  state: () => ({
    theme: "dark",
    selectedTheme: "system",
  }),

  actions: {
    switchTheme(theme = "system") {
      if (
        this.selectedTheme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        this.theme = "dark";
      } else if (
        this.selectedTheme === "system" &&
        !window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        this.theme = "light";
      } else {
        this.theme = theme;
      }
      this.selectedTheme = theme;
    },
  },

  persist: true,
});
