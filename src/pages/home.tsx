import { useNavigate } from "react-router-dom";
import Card from "../components/card";

export default function Home() {
  const navigate = useNavigate();
  const scanQR = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    return navigate("/scan-qr");
  };

  const submitDoc = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    return navigate("/submit-pdf");
  };

  const docList = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    return navigate("/doc-list");
  };

  return (
    <div className="grid h-screen place-items-center">
      <img src="https://www.additive.sandvik/gui/i/logo-fb-sharing.png" />
      <div className="flex flex-row">
        <Card onClick={(e) => scanQR(e)} title="Scan QR" />
        <Card onClick={(e) => submitDoc(e)} title="Submit document" />
        <Card onClick={(e) => docList(e)} title="Document list" />
      </div>
    </div>
  );
}