import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFiles from "../hooks/useFiles";

export default function SubmitPDF() {
  const navigate = useNavigate();
  const [currentFile, setCurrentFile] = useState<File>({} as File);
  const { submitFile } = useFiles();
  const goBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/");
  };
  const submit = async (e: any) => {
    e.preventDefault();
    await submitFile(currentFile);
  };
  const setFile = (e: any) => {
    const file = e.target.files[0] as File;
    setCurrentFile(file);
  };

  return (
    <div className="grid h-screen place-items-center">
      <form onSubmit={(e) => submit(e)} className="flex flex-col" encType="multipart/form-data">
        <span
          className="text-extrabold text-md hover:cursor-pointer hover:text-blue-600 w-fit"
          onClick={(e) => goBack(e)}
        >
          {`< Go back`}
        </span>
        <span className="text-2xl">File upload</span>
        <input onChange={(e) => setFile(e)} className="mb-2 mt-2" type="file" name="the_file" id="fileToUpload" />
        <input
          className="bg-blue-500 p-2 text-gray-200 text-bold rounded-xl disabled:bg-blue-300 hover:cursor-pointer"
          type="submit"
          name="submit"
          value="Start Upload"
        />
      </form>
    </div>
  );
}