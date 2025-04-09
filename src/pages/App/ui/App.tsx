import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/shared/lib/theme";
import { HashRouter } from "react-router-dom";
import { MainPage } from "../../MainPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <HashRouter>
        <MainPage />
      </HashRouter>
    </ThemeProvider>
  </StrictMode>
);
