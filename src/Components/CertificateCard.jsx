import React from "react";
import { FaFilePdf, FaArrowRight, FaDownload } from "react-icons/fa";

/**
 * Simple card for a certificate entry. Accepts title/institution/date and
 * a path to the PDF/jpg. The component handles view/download actions.
 */
const CertificateCard = ({
  title,
  institution,
  date,
  fileUrl,
  downloadName,
}) => {
  return (
    <article className="flex flex-col gap-4 bg-[#5F9598] rounded-2xl shadow-2xl p-6 w-full md:w-1/3">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-lg font-medium">{institution}</p>
      <p className="text-lg">{date}</p>

      <div className="flex items-center gap-3 bg-[#F3F4F4] rounded-xl p-2 text-[#061E29]">
        <FaFilePdf className="text-2xl" />
        <span className="text-lg font-medium">PDF Document</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <button
          onClick={() => window.open(fileUrl, "_blank")}
          className="flex items-center justify-center gap-2 text-lg font-medium text-black hover:underline"
        >
          View Full Certificate <FaArrowRight />
        </button>
        <a
          href={fileUrl}
          download={downloadName}
          className="flex items-center justify-center gap-2 text-lg text-gray-600 hover:underline"
        >
          <FaDownload /> Download
        </a>
      </div>
    </article>
  );
};

export default CertificateCard;
