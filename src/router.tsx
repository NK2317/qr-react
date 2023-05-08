import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SubmitPDF from "./pages/submit-pdf";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submit-pdf" element={<SubmitPDF />} />

    </Routes>
  );
}
