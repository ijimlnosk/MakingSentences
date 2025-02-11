import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => {
      registration.unregister();
    });
  });
}

// async function prepare() {
//   const { worker } = await import("./mocks/browser");
//   return worker.start({
//     onUnhandledRequest: "bypass", // MSW에서 처리하지 않는 요청은 무시
//   });
// }

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
