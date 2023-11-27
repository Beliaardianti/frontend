import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Managestore = React.lazy(() => import("pages/Managestore"));
const Orders = React.lazy(() => import("pages/Orders"));
const Suppliers = React.lazy(() => import("pages/Suppliers"));
const Reports= React.lazy(() => import("pages/Reports"));
const ProductInfo = React.lazy(() => import("pages/ProductInfo"));
const Inventory = React.lazy(() => import("pages/Inventory"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/productinfo" element={<ProductInfo />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/managestore" element={<Managestore />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
