import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SignInPage } from "../pages/signIn";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
};
