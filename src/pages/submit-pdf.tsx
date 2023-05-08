import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFiles from "../hooks/useFiles";

export default function SubmitPDF() {
  const [file, setFile] = useState<File>({} as File);
  const [fName, setFName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { submitFile } = useFiles();

  const isPDF = (f: File) => f.name.split(".")[1] === "pdf"
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.item(0);
    if (!f) return;

    if (isPDF(f)) {
      setFile(f);
      setError("");
    }
    else {
      setError("Please select another file with .pdf extension");
    }
  };
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const storedName = await submitFile(file, fName);

    if (!storedName) return alert("There is no file saved");
  };
  const goBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/");
  }
  return (
    <div className="grid h-screen place-items-center">
      <form onSubmit={submit} className="flex flex-col">
        <span
          className="text-extrabold text-md hover:cursor-pointer hover:text-blue-600 w-fit"
          onClick={(e) => goBack(e)}
        >
          {`< Go back`}
        </span>
        <span className="text-2xl text-bold mb-2">Submit PDF</span>
        <input
          required
          className="my-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="File Name (no special characters)"
          onChange={(e) => setFName(e.target.value)}
        />
        <input
          className="mb-6"
          type="file"
          id="pdf"
          required
          onChange={(e) => handleChange(e)}
        />
        <span className="my-2 text-red-500">{error}</span>
        <button
          type="submit"
          disabled={Boolean(error)}
          className="bg-blue-500 p-2 text-gray-200 text-bold rounded-xl disabled:bg-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}