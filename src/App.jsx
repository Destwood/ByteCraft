import Layout from "./components/layout/Layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Profile from "./pages/Profile/Profile";
import CatalogPage from "./pages/Catalog";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import FundraiserPage from "./pages/Fundraiser";
import { useAuth } from "./hooks/useAuth";

function App() {
  const isAuth = useAuth();

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/fundraiser" element={<FundraiserPage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/profile" element={<Profile />} />

          {!isAuth ? (
            <>
              <Route path="/auth/login" element={<LoginPage />} />
              <Route path="/auth/register" element={<RegisterPage />} />
            </>
          ) : (
            <Route path="/auth/login" element={<Navigate to="/home" />} />
          )}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
