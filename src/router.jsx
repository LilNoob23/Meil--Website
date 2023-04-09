import {
  createBrowserRouter
} from "react-router-dom";
import { Home, Projects } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/producciones-artisticas",
    element:  <Projects/>
  },
  {
    path: "/productos",
    element:  <Projects/>
  },
]);

export default router