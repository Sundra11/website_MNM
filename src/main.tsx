import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound.tsx";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import HomePage from "./components/pages/HomePage.tsx";
import Navbar from "./components/pages/Navbar.tsx";
import Login from "./components/pages/Login.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Dashboard from "./components/pages/Dashboard.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HomePage />
              </>
            }
          />
          <Route path="admin/login" element={<Login />} />

          <Route
            path="admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>,
);
