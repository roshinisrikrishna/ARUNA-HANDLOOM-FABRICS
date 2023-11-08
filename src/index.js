import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import Portfolio from "views/index-sections/Portfolio/Index"
import Yarn from "views/index-sections/Yarn/Index"
import Rotary from "views/index-sections/Rotary/Index"
import Pintuck from "views/index-sections/Pintuck/Index"
import Patch from "views/index-sections/Patch/Index"
import IKAT from "views/index-sections/IKAT/Index"
import Knit from "views/index-sections/Knit/Index"
import Kalamkari from "views/index-sections/Kalamkari/Index"
import Batik from "views/index-sections/Batik/Index"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<Index />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/yarn" element={<Yarn />} />
      <Route path="/rotary" element={<Rotary />} />
      <Route path="/pintuck" element={<Pintuck />} />
      <Route path="/patch" element={<Patch />} />
      <Route path="/ikat" element={<IKAT />} />
      <Route path="/knit" element={<Knit />} />
      <Route path="/kalamkari" element={<Kalamkari />} />
      <Route path="/batik" element={<Batik />} />









      




      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
