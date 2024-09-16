import React from "react";
import { getCertificates } from "@lib/get-certificates";
import CertificateCard from "@components/certificate/CertificateCard";

export default function page() {
  const certificates = getCertificates().sort((a, b) => {
    const dateA = new Date(a.metadata.issueDate!);
    const dateB = new Date(b.metadata.issueDate!);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <main className="grid gap-8 md:gap-16 ">
      <div className="text-center">
        <h1>Certificates</h1>
      </div>

      <div className="grid grid-cols-4 ">
        {certificates.map((item, index) => {
          return <CertificateCard key={index} {...item.metadata} />;
        })}
      </div>
      <h2 className="text-center">To be continued...</h2>
    </main>
  );
}
