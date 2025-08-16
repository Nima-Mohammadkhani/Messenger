export type Theme = "light" | "dark";

export const themes: Theme[] = ["light", "dark"];

export function getTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const savedTheme = localStorage.getItem("theme") as Theme;
  if (savedTheme && themes.includes(savedTheme)) {
    return savedTheme;
  }

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

export function setTheme(theme: Theme): void {
  if (typeof window === "undefined") return;

  const root = document.documentElement;

  root.classList.remove(...themes.map((t) => `theme-${t}`));

  root.classList.add(`theme-${theme}`);

  root.setAttribute("data-theme", theme);

  localStorage.setItem("theme", theme);
}

export function toggleTheme(): Theme {
  const currentTheme = getTheme();
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
  return newTheme;
}

export function initializeTheme(): void {
  if (typeof window === "undefined") return;

  const theme = getTheme();
  setTheme(theme);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    });
}
