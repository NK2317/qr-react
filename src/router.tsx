import { Route, Routes } from "react-router-dom";
import DocumentList from "./pages/document-list";
import Home from "./pages/home";
import QRScan from "./pages/qr-scan";
import SubmitPDF from "./pages/submit-pdf";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submit-pdf" element={<SubmitPDF />} />
      <Route path="/scan-qr" element={<QRScan />} />
      <Route path="/doc-list" element={<DocumentList />} />
    </Routes>
  );
}
