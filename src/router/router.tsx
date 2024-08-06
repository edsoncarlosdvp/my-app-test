import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { ClientForm } from "../pages/clientForm";
import { Counter } from "../pages/counter";
import { Fetch } from "../pages/fetch";
import { List } from "../pages/list";
import SearchResults from "../pages/searchResult";
import { Timer } from "../pages/timer";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="contador" element={<Counter />} />
          <Route path="cliente" element={<ClientForm />} />
          <Route path="lista" element={<List />} />
          <Route path="timer" element={<Timer />} />
          <Route path="fetch" element={<Fetch />} />
          <Route path="resultados" element={<SearchResults />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}