"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./housing.module.css";

const toolInfo = {
  title: "Housing Levy & Eligibility Calculator (2026)",
  description: "Strategic audit of your mandatory 3% combined statutory contribution and its long-term impact on your Boma Yangu housing eligibility.",
};

export default function HousingLevyClient() {
  const [grossSalary, setGrossSalary] = useState(100000);

  const levyRate = 0.03; // Combined rate as per request
  const monthlyLevy = grossSalary * levyRate;
  const annualLevy = monthlyLevy * 12;
  const projectedTenYears = annualLevy * 10;

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Kenya Housing Levy Calculator",
    "operatingSystem": "All",
    "applicationCategory": "FinancialApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KES"
    },
    "description": "Calculates mandatory 2026 Housing Levy deductions for Kenyan employees and employers based on gross salary."
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
              <label>Monthly Gross Salary (KES)</label>
              <input 
                type="number" 
                value={grossSalary} 
                onChange={(e) => setGrossSalary(Number(e.target.value))} 
              />
              <p className={styles.helpText}>Enter your total basic salary plus all regular allowances.</p>
            </div>
            <div className={styles.field}>
              <label>Statutory Rate (2026)</label>
              <input type="text" value="3% (Combined)" disabled />
              <p className={styles.helpText}>Includes both 1.5% employee and 1.5% employer contributions as mandated.</p>
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultCard}>
              <h3>Monthly Contribution</h3>
              <p className={styles.amount}>KES {monthlyLevy.toLocaleString()}</p>
              <small>Deducted and remitted to the Housing Fund via KRA iTax.</small>
            </div>
            <div className={styles.resultCard}>
              <h3>Annual Total Impact</h3>
              <p className={styles.amount}>KES {annualLevy.toLocaleString()}</p>
              <small>Total accumulation for the 2026 fiscal year.</small>
            </div>
            <div className={styles.resultCard + " " + styles.highlight}>
              <h3>Projected 10-Year Fund</h3>
              <p className={styles.amount}>KES {projectedTenYears.toLocaleString()}</p>
              <small>Estimated principal contribution for Boma Yangu mortgage leverage.</small>
            </div>
            <div className={styles.cta}>
              <p>Maximize your statutory benefits?</p>
              <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Audit Your Payroll</a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <h2>The 2026 Housing Levy Framework</h2>
          <p>
            By 2026, the Affordable Housing Levy has become a cornerstone of Kenya's social infrastructure. Beyond a simple tax, it serves as a forced-savings mechanism that directly influences your creditworthiness for government-backed mortgage schemes.
          </p>
          <div className="grid grid-2">
            <div>
              <h3>Eligibility & Allocation</h3>
              <p>Contributions are tiered towards specific housing categories: Social Housing (A), Low-Cost Housing (B), and Mortgage Gap Housing (C). Your gross salary determines which tier of the 2026 housing units you are prioritized for.</p>
            </div>
            <div>
              <h3>Compliance & Deductibility</h3>
              <p>For employers, failure to remit the levy results in severe penalties and the disallowance of the employee's salary as a tax-deductible expense in the 2026 KRA audit cycle.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
