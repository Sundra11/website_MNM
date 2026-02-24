import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import NotFound from "./components/pages/NotFound.tsx";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import HomePage from "./components/pages/HomePage.tsx";
import Navbar from "./components/pages/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>,
);
