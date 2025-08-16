import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "~react-pages";
import PWABadge from "./PWABadge.tsx";
import ThemeToggle from "./components/ui/ThemeToggle.tsx";
import { useEffect } from "react";
import { initializeTheme } from "./lib/theme.ts";

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

function App() {
  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <BrowserRouter>
      <PWABadge />
      <ThemeToggle />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
