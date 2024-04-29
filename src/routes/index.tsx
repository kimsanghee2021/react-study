import { BrowserRouter, Routes, Route } from "react-router-dom";

import Test from "~/pages/test";
import Main from "~/pages/main";
import Category from "~/pages/Category";
import Ids from "~/pages/id";
import ToDoList from "~/pages/TodoList";
import IaList from "~/pages/IaList";
import MainPage from "~/pages/MiniBlog/MainPage";
import PostView from "~/pages/MiniBlog/PostViewPage";
import PostWrite from "~/pages/MiniBlog/PostWritePage";

const routes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<IaList />} />
      <Route path="/main" element={<Main />} />
      <Route path="/test" element={<Test />} />
      <Route path="/mainPage" element={<MainPage />} />
      <Route path="/postView/:id" element={<PostView />} />
      <Route path="/postWrite" element={<PostWrite />} />
      <Route path="/postWrite/:id" element={<PostWrite />} />
      <Route path="/ids/:id" element={<Ids />} />
      <Route path="/todolist" element={<ToDoList />} />
    </Routes>
  </BrowserRouter>
);

export default routes;
