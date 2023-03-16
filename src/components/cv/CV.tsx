import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.vite";
import pdf from "../../assets/resume.pdf";
//import * from "../../assets/resume.pdf"

// Create Document Component
const CV = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        //file="../../assets/resume.pdf"
        file={pdf}
        // file="resume.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default CV;
