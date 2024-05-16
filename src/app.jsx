import { Route, Routes } from "react-router-dom";
import {
  LandingPage,
  MultiStepFormPage,
  QRCodeChallengePage,
  RatingPage,
  SocialProofPage,
  SortableListPage
} from "./pages";

export function App() {
  return (
    <div className="min-w-[275px]">
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="challenges">
          <Route path="qrcode" element={<QRCodeChallengePage />} />
          <Route path="social-proof" element={<SocialProofPage />} />
          <Route path="sortable-list" element={<SortableListPage />} />
          <Route path="multi-form" element={<MultiStepFormPage />} />
          <Route path="rating" element={<RatingPage />} />
        </Route>
      </Routes>
    </div>
  );
}
