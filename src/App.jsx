import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import { ToastContainer } from "react-toastify";
import SocketRegister from "./socket/SocketRegister";

function App() {
  return (
    <div className="min-h-screen bg-cover bg-center">
      <SocketRegister />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
