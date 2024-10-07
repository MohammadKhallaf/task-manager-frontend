import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import store from "./store/redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="tasks" element={<div>Tasks</div>} />
          <Route path="login" element={<div>Login</div>} />
          <Route path="register" element={<div>Register</div>} />

          <Route path="*" element={<div>Not found | 404</div>} />
        </Routes>
        <ToastContainer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
