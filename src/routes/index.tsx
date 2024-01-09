import { BrowserRouter, Routes, Route } from "react-router-dom";

import Test from "~/pages/test";
import Main from "~/pages/main";
import Ids from "~/pages/id";

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/test" element={<Test />} />
      <Route path="/ids/:id" element={<Ids />} />
    </Routes>
  </BrowserRouter>
);
