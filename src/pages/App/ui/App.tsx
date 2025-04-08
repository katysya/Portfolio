import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/shared/lib/theme";
import { BrowserRouter } from "react-router-dom";
import { MainPage } from "../../MainPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter basename="/Portfolio/">
        <MainPage />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
