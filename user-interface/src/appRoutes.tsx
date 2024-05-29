// routes.tsx
import { Home, NotFound404 } from "./pages/index";

const appRoutes = [
  { path: "/", element: <Home /> },
  { path: "*", element: <NotFound404 /> },
];

export default appRoutes;
