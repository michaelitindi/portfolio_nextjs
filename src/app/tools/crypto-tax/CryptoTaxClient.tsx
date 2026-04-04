"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./crypto.module.css";

const toolInfo = {
  title: "Digital Asset & Crypto Tax Estimator (2026)",
  description: "Calculate your projected tax exposure on digital asset transactions under the 2026 KRA Digital Asset Tax (DAT) and Excise framework.",
};

export default function CryptoTaxClient() {
  const [transactionVolume, setTransactionVolume] = useState(500000);
  const [profit, setProfit] = useState(150000);

  const datRate = 0.03; // 3% on gross transaction value
  const exciseRate = 0.10; // 10% on platform fees (assuming 1% avg platform fee)
  
  const estimatedPlatformFees = transactionVolume * 0.01;
  const exciseTax = estimatedPlatformFees * exciseRate;
  const datTax = transactionVolume * datRate;
  const totalTax = datTax + exciseTax;

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Kenya Crypto Tax Calculator",
    "operatingSystem": "All",
    "applicationCategory": "FinancialApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KES"
    },
    "description": "Estimates 2026 KRA Digital Asset Tax and Excise duties for cryptocurrency transactions in Kenya."
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
              <label>Total Transaction Volume (KES)</label>
              <input 
                type="number" 
                value={transactionVolume} 
                onChange={(e) => setTransactionVolume(Number(e.target.value))} 
              />
              <p className={styles.helpText}>Gross value of all digital asset transfers or exchanges.</p>
            </div>
            <div className={styles.field}>
              <label>Net Realized Profit (KES)</label>
              <input 
                type="number" 
                value={profit} 
                onChange={(e) => setProfit(Number(e.target.value))} 
              />
              <p className={styles.helpText}>Used for calculating capital gains exposure where applicable.</p>
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultCard}>
              <h3>Digital Asset Tax (3% Gross)</h3>
              <p className={styles.amount}>KES {datTax.toLocaleString()}</p>
              <small>Mandatory deduction on the gross value of the transfer.</small>
            </div>
            <div className={styles.resultCard}>
              <h3>Excise on Platform Fees (10%)</h3>
              <p className={styles.amount}>KES {exciseTax.toLocaleString()}</p>
              <small>Estimated excise duty on exchange transaction fees.</small>
            </div>
            <div className={styles.resultCard + " " + styles.highlight}>
              <h3>Total KRA Liability</h3>
              <p className={styles.amount}>KES {totalTax.toLocaleString()}</p>
              <small>Combined 2026 tax exposure for the calculated volume.</small>
            </div>
            <div className={styles.cta}>
              <p>Concerned about crypto tax compliance?</p>
              <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Get a Tax Audit</a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Digital Asset Taxation in 2026 Kenya</h2>
          <p>
            The 2026 fiscal landscape for digital assets has matured from simple monitoring to real-time enforcement. KRA's integration with major global exchanges ensures that transaction volumes are cross-referenced with iTax filings.
          </p>
          <div className="grid grid-2">
            <div>
              <h3>Gross vs. Profit-Based Tax</h3>
              <p>While the Digital Asset Tax (DAT) is currently applied to the gross transaction value, advanced traders must also account for Capital Gains Tax (CGT) on high-value disposals if the assets are held as long-term investments.</p>
            </div>
            <div>
              <h3>Real-Time Reporting</h3>
              <p>In 2026, most local crypto on-ramps and off-ramps are required to deduct and remit DAT at the point of transaction, similar to how withholding taxes operate in other sectors.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
