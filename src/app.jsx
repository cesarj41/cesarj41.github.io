import { Outlet, Route, Routes } from "react-router-dom";
import { ChallengeLayout } from "./components/challenge-layout";
import { LandingPage } from "./pages/landing-page/landing-page";
import { QRCodeChallengePage } from "./pages/qrcode-challenge-page/qrcode-challenge-page";

export function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route
        path="challenges"
        element={
          <ChallengeLayout>
            <Outlet />
          </ChallengeLayout>
        }
      >
        <Route path="qrcode" element={<QRCodeChallengePage />} />
      </Route>
    </Routes>
  );
}
