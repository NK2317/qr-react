import { useState } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import Card from "../components/card";

export default function QRScan() {
  const navigate = useNavigate();
  const [data, setData] = useState('No result');

  return (
    <div className="grid h-screen place-items-center">
      <div className="flex flex-col text-center">
        <span
          className="text-extrabold text-md hover:cursor-pointer hover:text-blue-600 w-fit"
          onClick={() => navigate("/")}
        >
          {`< Go back`}
        </span>
        <QrReader
          constraints={{}}
          onResult={(result, error) => {
            if (result) {
              setData(result.getText());
            }

            if (error) {
              console.info(error);
            }
          }}
          containerStyle={{ width: '300px' }}
          videoContainerStyle={{ width: "300px" }}
        />
        <a href={data} className="text-extrabold text-md">{data}</a>
      </div>
    </div>
  );
}