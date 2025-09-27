import { Route, Routes, Outlet } from "react-router-dom";
import ScrollToTop from "../components/layout/ScrollToTop";
import ProtectedRoute from "./ProtectedRoute";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Home from "../pages/home/Home";

const Layout = () => (
  <div className="flex flex-col min-h-screen">
    <ScrollToTop />
    <Header />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

function RouteMap() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default RouteMap;
