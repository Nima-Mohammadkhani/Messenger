import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "~react-pages";
import PWABadge from "./PWABadge.tsx";

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

function App() {
  return (
    <BrowserRouter>
      <PWABadge />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
