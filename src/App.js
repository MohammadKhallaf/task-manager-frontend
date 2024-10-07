import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Container className="py-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="tasks" element={<TaskListPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />

            <Route path="*" element={<div>Not found | 404</div>} />
          </Routes>
        </Container>
        <ToastContainer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
