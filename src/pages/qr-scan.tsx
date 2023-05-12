import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QrScanner } from "../components/scanner";

export default function QRScan() {
  const navigate = useNavigate();
  const [data, setData] = useState('No result');
  const [deviceId, setDeviceId] = useState("");
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);

  const getFrontalMediaDevice = async () => {
    if (typeof navigator !== "undefined") {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const validDevices = devices.filter(d => Boolean(d.deviceId) && d.kind === "videoinput");
      setDevices(validDevices);
    }
  };

  useEffect(() => {
    getFrontalMediaDevice();
  }, []);

  return (
    <div className="grid h-screen place-items-center">
      <div className="flex flex-col text-center">
        <span
          className="text-extrabold text-md hover:cursor-pointer hover:text-blue-600 w-fit"
          onClick={() => navigate("/")}
        >
          {`< Go back`}
        </span>
        <button onClick={() => getFrontalMediaDevice()}>Refresh list</button>
        <select onChange={(e) => setDeviceId(e.target.value)}>
          <option value="">Seleccionar dispositivo de video</option>
          {devices?.map((d) => (
            <option value={d.deviceId}>{d.label}</option>
          ))}
        </select>
        <QrScanner
          onDecode={(result) => setData(result.toString())}
          onError={(error) => console.log(error?.message)}
          deviceId={deviceId}
        />
        <a href={data} className="text-extrabold text-md">{data}</a>
      </div>
    </div>
  );
}