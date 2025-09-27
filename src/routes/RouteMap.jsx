import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home"; // Đúng đường dẫn tới Home.jsx của bạn

const Fallback = () => (
  <div style={{ padding: 24, fontSize: 16 }}>App is up ✅ (fallback route)</div>
);

export default function RouteMap() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Fallback />} />
    </Routes>
  );
}
