import { BrowserRouter, Routes, Route } from "react-router-dom";

import Test from "~/pages/test";
import Main from "~/pages/main";
import Ids from "~/pages/id";
import ToDoList from "~/pages/TodoList";
import IaList from "~/pages/IaList";
import MiniBlog from "~/pages/MiniBlog";

const routes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<IaList />} />
      <Route path="/main" element={<Main />} />
      <Route path="/test" element={<Test />} />
      <Route path="/miniblog" element={<MiniBlog />} />
      <Route path="/ids/:id" element={<Ids />} />
      <Route path="/todolist" element={<ToDoList />} />
    </Routes>
  </BrowserRouter>
);

export default routes;
