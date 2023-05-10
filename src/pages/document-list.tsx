import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QrCode from "../components/qr-code-generator";
import constants from "../constants";
import useFiles from "../hooks/useFiles";

export default function DocumentList() {
  const navigate = useNavigate();
  const [url, setUrl] = useState("somecol");
  const { getDocList, docs } = useFiles();
  const getQR = (name: string) => {
    setUrl(name);
  };
  useEffect(() => {
    getDocList();
  }, []);
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex flex-col">
        <span
          className="text-extrabold text-md hover:cursor-pointer hover:text-blue-600 w-fit mb-2"
          onClick={() => navigate("/")}
        >
          {`< Go back`}
        </span>
        <QrCode url={url} />
        <ol className="mt-2">
          {docs?.map((doc) => (
            <li key={`doc_${doc}`}>
              <a href={`${constants.apiServer}/uploads/${doc}`}>{doc}</a> <span onClick={() => getQR(`${constants.apiServer}/uploads/${doc}`)} className="text-blue-500 hover:cursor-pointer">Get QR</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}