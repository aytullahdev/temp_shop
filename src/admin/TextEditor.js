import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
const TextEditor = ({ setDescription, value }) => {
  const editor = useRef(null);

  return (
    <div
      className="
     "
    >
      <JoditEditor
        ref={editor}
        value={value && value}
        className="prose"
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setDescription(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {
          setDescription(newContent);
        }}
      />
    </div>
  );
};

export default TextEditor;
