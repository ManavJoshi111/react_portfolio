import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import { initTracking } from "./lib/tracker";

createRoot(document.getElementById("root")!).render(<App />);

initTracking();
