import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { ClientForm } from "../pages/clientForm";
import { Counter } from "../pages/counter";
import { List } from "../pages/list";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="contador" element={<Counter />} />
          <Route path="cliente" element={<ClientForm />} />
          <Route path="lista" element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}