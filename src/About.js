import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import resume from "./resume/resume.pdf";

function About() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page
  const [color, setColor] = useState("");
  const [color2, setColor2] = useState("");
  useEffect(() => {
    const color = localStorage.getItem("color");
    if (color === "default") {
      setColor("");
      setColor2("");
    } else if (color === "dark") {
      setColor("white");
      setColor2("#1D1B1C");
    } else if (color === "pink") {
      setColor("pink");
    } else if (color === "blue") {
      setColor("lightblue");
    }
  }, []);

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
      <div style={{ color: color }} className="aboutHeader">
        <h1>About Me</h1>
        <h3>View My Resume</h3>
      </div>

      <div className="pdfWrapper" style={{ color: color }}>
        <Document
          className="pdfTag"
          file={resume}
          options={{ workerSrc: "/pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
          <div className="buttonTag">
            <p style={{ color: color }}>
              Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </p>
            <button
              style={{ backgroundColor: color, color: color2 }}
              className="btn btn-success"
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: color, color: color2 }}
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
