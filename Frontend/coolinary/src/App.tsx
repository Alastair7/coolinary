import { Route, Routes } from "react-router";
import "./App.css";
import { CallbackPage } from "./pages/Callback/CallbackPage";
import { GuestPage } from "./pages/Guest/GuestPage";
import { HomePage } from "./pages/Home/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GuestPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/callback" element={<CallbackPage />} />
    </Routes>
  );
}

export default App;
