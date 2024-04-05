import { Outlet, Route, Routes } from "react-router-dom";
import { ChallengeLayout } from "./components/challenge-layout";
import { LandingPage, QRCodeChallengePage } from "./pages";

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
