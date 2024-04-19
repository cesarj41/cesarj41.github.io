import { Outlet, Route, Routes } from "react-router-dom";
import { ChallengeLayout } from "./components/challenge-layout";
import { LandingPage, QRCodeChallengePage } from "./pages";

export function App() {
  return (
    <div className="min-w-[320px]">
      <Routes>
        <Route path="/" index element={<LandingPage />} />
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
    </div>
  );
}
