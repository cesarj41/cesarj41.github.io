import { Route, Routes } from "react-router-dom";
import { PortfolioLandingPage } from "./components/portfolio-landing-page/portfolio-landing-page";

export function App() {
  return (
    <Routes>
      <Route index element={<PortfolioLandingPage />} />
    </Routes>
  );
}
