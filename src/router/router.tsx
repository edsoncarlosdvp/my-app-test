import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ClientForm } from "../pages/clientForm";
import { Counter } from "../pages/counter";
import { Error } from "../pages/error";
import { ListItem } from "../pages/listItem";


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <App />,
    children: [
      { path: "contador", element: <Counter /> },
      { path: "cliente", element: <ClientForm /> },
      { path: "lista", element: <ListItem /> },
    ],
  },
]);

export default router;
