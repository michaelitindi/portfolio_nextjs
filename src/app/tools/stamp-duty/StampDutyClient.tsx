"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./stamp.module.css";

const toolInfo = {
  title: "Land Transfer & Stamp Duty Calculator (2026)",
  description: "Accurately estimate the total cost of property acquisition in Kenya, factoring in 2026 statutory stamp duty rates and professional legal fees.",
};

export default function StampDutyClient() {
  const [propertyValue, setPropertyValue] = useState(5000000);
  const [isUrban, setIsUrban] = useState(true);

  const stampDutyRate = isUrban ? 0.04 : 0.02; // 4% Urban as per request
  const legalFeeRate = 0.0125; // Standard 1.25% or 2% scaled
  const valuationFeeRate = 0.0025; // 0.25%

  const stampDuty = propertyValue * stampDutyRate;
  const legalFees = Math.max(propertyValue * legalFeeRate, 35000);
  const valuationFees = propertyValue * valuationFeeRate;
  
  const totalCost = stampDuty + legalFees + valuationFees;

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Kenya Stamp Duty Calculator",
    "operatingSystem": "All",
    "applicationCategory": "FinancialApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KES"
    },
    "description": "Calculates property transfer taxes and professional fees for Kenyan land transactions in 2026."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Navbar />
      <main className="container">
        <section className={styles.hero}>
          <h1>{toolInfo.title}</h1>
          <p>{toolInfo.description}</p>
        </section>

        <section className={styles.calculatorGrid}>
          <div className={styles.inputs}>
            <div className={styles.field}>
              <label>Declared Property Value (KES)</label>
              <input 
                type="number" 
                value={propertyValue} 
                onChange={(e) => setPropertyValue(Number(e.target.value))} 
              />
            </div>
            <div className={styles.field}>
              <label>Location Classification</label>
              <select value={isUrban ? "urban" : "rural"} onChange={(e) => setIsUrban(e.target.value === "urban")}>
                <option value="urban">Urban Area (Municipality/City)</option>
                <option value="rural">Rural Area (Agricultural Land)</option>
              </select>
            </div>
            <div className={styles.field}>
              <label>Statutory Stamp Duty (2026)</label>
              <input type="text" value={isUrban ? "4%" : "2%"} disabled />
              <p className={styles.helpText}>Urban rate (4%) applies to properties within Nairobi, Mombasa, Kisumu and other major municipalities.</p>
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultCard}>
              <h3>Stamp Duty (KRA)</h3>
              <p className={styles.amount}>KES {stampDuty.toLocaleString()}</p>
              <small>Paid directly to KRA via iTax before the transfer is registered.</small>
            </div>
            <div className={styles.resultCard}>
              <h3>Legal & Valuation Fees</h3>
              <p className={styles.amount}>KES {(legalFees + valuationFees).toLocaleString()}</p>
              <small>Estimated professional fees based on 2026 Law Society of Kenya (LSK) scale.</small>
            </div>
            <div className={styles.resultCard + " " + styles.highlight}>
              <h3>Total Acquisition Tax</h3>
              <p className={styles.amount}>KES {totalCost.toLocaleString()}</p>
              <small>Total non-capital expenditure required for property transfer.</small>
            </div>
            <div className={styles.cta}>
              <p>Closing a high-value real estate deal?</p>
              <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Get a Legal Review</a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Property Transfer Protocols in 2026</h2>
          <p>
            In 2026, the Ministry of Lands and KRA have fully integrated the Ardhisasa system with iTax. This ensures that stamp duty must be cleared and verified in real-time before any title deed is processed.
          </p>
          <div className="grid grid-2">
            <div>
              <h3>Valuation Integrity</h3>
              <p>Property valuations are now conducted using AI-driven spatial data alongside physical inspections. KRA strictly audits any under-declared values to ensure full stamp duty compliance at the 4% urban rate.</p>
            </div>
            <div>
              <h3>E-Registration</h3>
              <p>The "Search" and "Transfer" process is now 100% digital. In 2026, the average turnaround time for a title transfer (from payment to deed issuance) has been reduced to 7 working days.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
