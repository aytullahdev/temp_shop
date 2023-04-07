import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const UploadImage = ({ setImg, imgLink }) => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePath, setFilePath] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("sampleFile", selectedFile);
    try {
      toast.promise(
        axios({
          method: "post",
          url: "http://localhost:9003/api/file/upload",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        }).then((res) => {
          //console.log(res.data);
          if (res.data && res.data?.fileId) {
            setFilePath(res.data.url);
            setImg(res.data.url);
            toast.success("File is Uploaded");
          }
        }),
        {
          pending: "File is Uploading",
        }
      );
    } catch (error) {}
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="py-2 flex flex-col space-y-2">
        <input
          type="file"
          className="rounded  border-1 outline-none border-gray-200"
          tittle=" "
          onChange={handleFileSelect}
        />
        <input
          type="submit"
          className="px-3 py-2 text-xs text-white rounded cursor-pointer bg-green-500"
          value="Upload File"
        />
      </form>
      <div>{filePath && <img src={filePath} className="w-40 h-40" />}</div>
      <div>
        {imgLink && !filePath && <img src={imgLink} className="w-40 h-40" />}
      </div>
    </>
  );
};

export default UploadImage;
