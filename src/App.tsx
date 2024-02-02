import React from "react";
import Router from "~/routes";
import { RecoilRoot } from "recoil";
import "~/common/scss/index.scss";

function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}

export default App;
