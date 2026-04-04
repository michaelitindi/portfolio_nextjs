"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./ecitizen.module.css";

const toolInfo = {
  title: "e-Citizen Transaction Fee Auditor (2026)",
  description: "A strategic tool to visualize the cumulative impact of government digital service convenience fees across your business or personal 2026 transaction volume.",
};

export default function ECitizenClient() {
  const [monthlyTransactions, setMonthlyTransactions] = useState(50);
  const [avgServiceFee, setAvgServiceFee] = useState(1500);

  const convenienceFee = 50; // Standard e-Citizen fee in 2026
  
  const totalConvenienceFeesMonthly = monthlyTransactions * convenienceFee;
  const totalServiceFeesMonthly = monthlyTransactions * avgServiceFee;
  const totalMonthlyImpact = totalConvenienceFeesMonthly + totalServiceFeesMonthly;
  const annualConvenienceFees = totalConvenienceFeesMonthly * 12;

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "e-Citizen Fee Auditor",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KES"
    },
    "description": "Audits the cumulative convenience fees for Kenyan government services on the e-Citizen platform for 2026."
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
              <label>Monthly Transaction Volume</label>
              <input 
                type="number" 
                value={monthlyTransactions} 
                onChange={(e) => setMonthlyTransactions(Number(e.target.value))} 
              />
              <p className={styles.helpText}>Includes NTSA, Business Registration, Passports, and County payments.</p>
            </div>
            <div className={styles.field}>
              <label>Average Service Fee (KES)</label>
              <input 
                type="number" 
                value={avgServiceFee} 
                onChange={(e) => setAvgServiceFee(Number(e.target.value))} 
              />
            </div>
            <div className={styles.field}>
              <label>Standard Convenience Fee (2026)</label>
              <input type="text" value="KES 50.00" disabled />
              <p className={styles.helpText}>Fixed flat rate applied to every e-Citizen portal transaction.</p>
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultCard}>
              <h3>Monthly Convenience Fees</h3>
              <p className={styles.amount}>KES {totalConvenienceFeesMonthly.toLocaleString()}</p>
              <small>Total non-service "Platform Fees" paid to the portal.</small>
            </div>
            <div className={styles.resultCard}>
              <h3>Total Monthly Spend</h3>
              <p className={styles.amount}>KES {totalMonthlyImpact.toLocaleString()}</p>
              <small>Service cost + platform fees combined.</small>
            </div>
            <div className={styles.resultCard + " " + styles.highlight}>
              <h3>Annual Platform Cost</h3>
              <p className={styles.amount}>KES {annualConvenienceFees.toLocaleString()}</p>
              <small>Cumulative 2026 expenditure on digital access alone.</small>
            </div>
            <div className={styles.cta}>
              <p>Optimizing government payment workflows?</p>
              <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Request a Process Audit</a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <h2>e-Citizen Governance in 2026</h2>
          <p>
            As of 2026, the e-Citizen portal (Gava Mkononi) is the mandatory gateway for over 15,000 government services. While it has improved efficiency, the cumulative cost of convenience fees for high-volume businesses has become a significant overhead.
          </p>
          <div className="grid grid-2">
            <div>
              <h3>Single Paybill Integration</h3>
              <p>The 222222 Paybill remains the centralized collection point. In 2026, real-time reconciliation ensures that services are activated instantly upon M-Pesa or bank transfer confirmation.</p>
            </div>
            <div>
              <h3>Enterprise Accounts</h3>
              <p>High-volume users in 2026 can now link corporate accounts for bulk payments, though the flat KES 50 per-transaction fee remains standard across all service levels to fund digital infrastructure.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
