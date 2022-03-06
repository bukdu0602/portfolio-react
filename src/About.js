import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import resume from "./resume/resume.pdf";

function About() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className="aboutMePage">
      <div className="aboutHeader">
        <h1>About Me</h1>
        <h3>View My Resume</h3>
      </div>

      <div className="pdfWrapper">
        <Document
          className="pdfTag"
          file={resume}
          options={{ workerSrc: "/pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
          <div className="buttonTag">
            <p>
              Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </p>
            <button
              className="btn btn-success"
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              Previous
            </button>
            <button
              className="btn btn-success"
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        </Document>
      </div>
    </div>
  );
}

export default About;
