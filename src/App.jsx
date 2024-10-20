import Layout from "./components/layout/Layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Profile from "./pages/Profile/Profile";
import CatalogPage from "./pages/Catalog";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import FundraiserPage from "./pages/Fundraiser";
import ProductPage from "./pages/Product";
import CreateFundPage from "./pages/CreateFund/CreateFund";
import FundraiserReportPage from "./pages/FundraiserReport/FundraiserReport";
import DonationPage from "./pages/Profile/Donation/Donation";
import SuccesfullFundraiserPage from "./pages/SuccesfullFundraiser/SuccesfullFundraiser";
import CreateFundraiserReportPage from "./pages/FundraiserReport/CreateReport/CreateFundraiserReport";
import ProfileSettingsPage from "./pages/Profile/Settings/Settings";
import { useAuth } from "./hooks/useAuth";

function App() {
  const isAuth = useAuth()

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
          <Route path="/profile-settings" element={<ProfileSettingsPage />} />

          <Route path="/fundraiser/:id" element={<FundraiserPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/donates" element={<DonationPage />} />

          <Route path="/create" element={<CreateFundPage />} />
          <Route path="/create-report" element={<CreateFundraiserReportPage />} />
          <Route path="/report" element={<FundraiserReportPage />} />
          <Route path="/successful-gatherings" element={<SuccesfullFundraiserPage />} />
          


          {!isAuth ? (
            <>
              <Route path="/auth/login" element={<LoginPage />} />
              <Route path="/auth/register" element={<RegisterPage />} />
            </>
          ) : (
            <Route path="/auth/login" element={<Navigate to="/home" />} />
          )}
          {/* <Route path="*" element={<Navigate to="/home" />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
