import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import LenisProvider from "./components/LenisProvider.jsx";

const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));
const TermsOfService = lazy(() => import("./pages/TermsOfService.jsx"));
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalUI from "./components/common/GlobalUI.jsx";
import RouteChangeStairs from "./components/RouteChangeStairs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LenisProvider>
      <BrowserRouter>
        <RouteChangeStairs>
          <GlobalUI>
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
              </Routes>
            </Suspense>
          </GlobalUI>
        </RouteChangeStairs>
      </BrowserRouter>
    </LenisProvider>
  </StrictMode>,
);
