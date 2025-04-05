import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import styles from "./Resume.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function Resume() {
    const pdfUrl = "https://raw.githubusercontent.com/DatDangg/Portfolio/main/public/resume.docx.pdf";
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getScale = (width) => {
        if (width < 400) return 0.4;
        if (width >= 400 && width < 600) return 0.6;
        if (width >= 600 && width < 800) return 0.8;
        if (width >= 800 && width < 1000) return 1;
        if (width >= 1000 && width < 1200) return 1.4;
        return 1.7;
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/resume.docx.pdf";
        link.download = "DangTienDat_Resume.pdf";
        link.click();
    };

    return (
        <div className={styles.resume}>
            <div className="container">
                <div className="row justify-content-center">
                    <button onClick={handleDownload} className={styles.downloadBtn}>
                        <svg viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                        </svg>
                        Download CV
                    </button>
                </div>
                <div className="row">
                    <Document
                        file={pdfUrl}
                        loading={<p className={styles.loading}>Loading PDF...</p>}
                        className="d-flex justify-content-center"
                    >
                        <div className={styles.content}>
                            <Page
                                pageNumber={1}
                                scale={getScale(width)}
                            />
                        </div>
                    </Document>
                </div>
                <div className="row justify-content-center">
                    <button onClick={handleDownload} className={styles.downloadBtn}>
                        <svg viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                        </svg>
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Resume;
