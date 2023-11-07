import { CloudUpload } from "@mui/icons-material";
import { Button } from "@mui/material";

import { useEffect, useState } from "react";

export default function Test() {
  const [fileName, setFileName] = useState("");
  const [startUpload, setStartUpload] = useState(false);
  async function upload() {
    const data = new FormData();
    data.append("file", fileName);
    const response = await fetch("/api/upload", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  const handleFileUpload = () => {
    setStartUpload(true);
  };
  useEffect(() => {
    if (startUpload == false) return;
    upload();
    setStartUpload(false);
  }, [startUpload]);
  return (
    <>
      <form>
        <input type="file" onChange={(e) => setFileName(e.target.files[0])} />
        <Button startIcon={<CloudUpload />} onClick={handleFileUpload}></Button>
      </form>
    </>
  );
}
