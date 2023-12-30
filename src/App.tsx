// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import WorkDetail1 from "./Pages/WorkDetails/1/WorkDetail1";
import WorkDetail2 from "./Pages/WorkDetails/2/WorkDetail2";
import Home from "./Pages/Home";
import WorkDetail3 from "./Pages/WorkDetails/3/WorkDetail3";
// ...导入其他 WorkDetail 组件
// <BrowserRouter basename="/js-workshop">
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/1" element={<WorkDetail1 />} />
        <Route path="/card/2" element={<WorkDetail2 />} />
        <Route path="/card/3" element={<WorkDetail3 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
