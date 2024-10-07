import { Provider, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import store from "./store/redux";
import Header from "./components/header";
import HomePage from "./pages/home";
import TaskListPage from "./pages/task-list";
import LoginPage from "./pages/login";
import { Container } from "react-bootstrap";
import RegisterPage from "./pages/register";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  const auth = useSelector((state) => state.auth);
  //
  return (
    <BrowserRouter>
      <Header />
      <Container className="py-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {auth.token && <Route path="tasks" element={<TaskListPage />} />}
          {!auth.token && (
            <>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </>
          )}

          <Route
            path="*"
            element={<Navigate to={auth.token ? "tasks" : "login"} />}
          />
        </Routes>
      </Container>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
