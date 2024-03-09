import { Route, Routes } from "react-router-dom";
import { ROUTER } from "./router";

import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";
import ContactPage from "../pages/ContactPage";
import AdminLoginPage from "../pages/AdminLoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTER.HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={ROUTER.CONTACT_PAGE_ROUTE} element={<ContactPage />} />
      <Route path={ROUTER.ADMIN_PAGE_ROUTE} element={<AdminPage />} />
      <Route
        path={ROUTER.ADMIN_LOGIN_PAGE_ROUTE}
        element={<AdminLoginPage />}
      />
      <Route path={ROUTER.ERROR_PAGE_ROUTE} element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
