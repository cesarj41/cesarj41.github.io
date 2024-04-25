import { Outlet, Route, Routes } from "react-router-dom";
import { ChallengeLayout } from "./components/challenge-layout";
import {
  LandingPage,
  QRCodeChallengePage,
  SocialProofPage,
  SortableListPage
} from "./pages";
import { MultiStepFormPage } from "./pages/multi-step-form-page/multi-step-form.page";

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
          <Route path="social-proof" element={<SocialProofPage />} />
          <Route path="sortable-list" element={<SortableListPage />} />
          <Route path="multi-form" element={<MultiStepFormPage />} />
        </Route>
      </Routes>
    </div>
  );
}
