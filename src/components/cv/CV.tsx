import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.vite";
import pdf from "../../assets/resume.pdf";
// If you want to use annotations (e.g. links) in PDFs rendered by React-PDF,
// then you would need to include stylesheet necessary for annotations to be correctly displayed like so:
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// If you want to use text layer in PDFs rendered by React-PDF,
// then you would need to include stylesheet necessary for text layer to be correctly displayed
import "react-pdf/dist/esm/Page/TextLayer.css";

// Create Document Component
const CV = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>

      <div className="m-1">
        <h5 className="font-noto italic text-emerald-600 dark:text-emerald-50 ">
          Page {pageNumber} of {numPages}
        </h5>
      </div>
    </div>
  );
};

export default CV;
