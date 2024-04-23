import { useUnit } from "effector-react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/home";
import { SignInPage } from "../pages/signIn";
import { LoginStore } from "../stores/signIn/store";

export const AppRoutes = () => {
  const { userEmail } = useUnit(LoginStore);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={userEmail ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!userEmail ? <SignInPage /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};
