import { useState } from "react";
import constants from "../constants";

export default function useFiles() {
  const [docs, setDocs] = useState<string[]>([]);
  const submitFile = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('the_file', file);
      const d = await fetch(constants.fileUploadApi, {
        method: 'POST',
        body: formData
      });
      const json = await d.json();
      console.log(json);
      alert("File submitted");
      return json;
    } catch (e) {
      console.error(e);
      alert("Something went wrong, please check you network status and if the problem persist contact the admin");
    }
  };

  const getDocList = async () => {
    try {
      const { data } = await (await (fetch("https://nd12.000webhostapp.com/scan.php"))).json();
      data.splice(0, 2);
      setDocs([...data]);
    } catch (e) {
      console.error(e);
      alert("Something went wrong, please check you network status and if the problem persist contact the admin");
    }
  };

  const visitFiles = async (fileName: string) => {
    window.location.href = constants.apiServer + "/uploads/" + fileName;
  }

  return { submitFile, getDocList, visitFiles, docs };
}
