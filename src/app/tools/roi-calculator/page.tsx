"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./roi.module.css";

// Metadata for SEO (handled by Next.js Metadata API in layout or page.tsx)
// Using a constant for internal page display
const toolInfo = {
  title: "ERP ROI Calculator (2026 Kenya Edition)",
  description: "Calculate the strategic return on investment for business automation. Factors in 2026 labor costs, M-Pesa API efficiencies, and KRA eTIMS compliance benefits.",
};

export default function ROICalculator() {
  const [employees, setEmployees] = useState(10);
  const [avgSalary, setAvgSalary] = useState(85000); // 2026 adjusted avg KES per month
  const [inefficiency, setInefficiency] = useState(25); // % of time wasted in 2026 complex environment
  const [erpCost, setErpCost] = useState(750000); // 2026 implementation estimate

  const monthlyWaste = (employees * avgSalary * (inefficiency / 100));
  const annualWaste = monthlyWaste * 12;
  const potentialSavings = annualWaste * 0.75; // 2026 systems are more efficient (75% recovery)
  const paybackMonths = erpCost / (potentialSavings / 12);

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Strategic ERP ROI Calculator",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KES"
    },
    "description": "A 2026 strategic tool for Kenyan businesses to calculate the ROI of ERP implementation, factoring in local labor costs, eTIMS compliance, and M-Pesa integration."
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
              <label>Number of Admin/Operations Staff</label>
              <input 
                type="number" 
                value={employees} 
                onChange={(e) => setEmployees(Number(e.target.value))} 
              />
            </div>
            <div className={styles.field}>
              <label>Average Monthly Salary (KES)</label>
              <input 
                type="number" 
                value={avgSalary} 
                onChange={(e) => setAvgSalary(Number(e.target.value))} 
              />
            </div>
            <div className={styles.field}>
              <label>Estimated Manual Waste (%)</label>
              <p className={styles.helpText}>Time spent on manual M-Pesa reconciliations, spreadsheet errors, and eTIMS data entry.</p>
              <input 
                type="range" 
                min="5" 
                max="60" 
                value={inefficiency} 
                onChange={(e) => setInefficiency(Number(e.target.value))} 
              />
              <span className={styles.rangeValue}>{inefficiency}%</span>
            </div>
            <div className={styles.field}>
              <label>Project Implementation Budget (KES)</label>
              <input 
                type="number" 
                value={erpCost} 
                onChange={(e) => setErpCost(Number(e.target.value))} 
              />
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultCard}>
              <h3>Annual Lost Productivity</h3>
              <p className={styles.amount}>KES {annualWaste.toLocaleString()}</p>
              <small>Calculated based on 2026 labor market rates in Kenya.</small>
            </div>
            <div className={styles.resultCard}>
              <h3>Potential Annual Savings</h3>
              <p className={styles.amount}>KES {potentialSavings.toLocaleString()}</p>
              <small>Estimated recovery through automated workflows and AI integration.</small>
            </div>
            <div className={styles.resultCard + " " + styles.highlight}>
              <h3>Strategic Breakeven</h3>
              <p className={styles.amount}>{paybackMonths.toFixed(1)} Months</p>
              <small>Targeting full ROI within the standard 12-18 month window.</small>
            </div>
            <div className={styles.cta}>
              <p>Ready to automate your operations?</p>
              <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Book a Strategic Audit</a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Strategic Automation in Kenya: The 2026 Landscape</h2>
          <p>
            As of 2026, the "digital tipping point" in Nairobi and across Kenya has made manual processes a significant business risk. With strict KRA enforcement and high-speed mobile competition, automation is the baseline for growth.
          </p>
          <div className="grid grid-2">
            <div>
              <h3>The "No eTIMS, No Expense" Rule</h3>
              <p>In 2026, KRA's automated systems automatically disallow any business expense not backed by a real-time eTIMS invoice. Integrated ERPs remove this risk by automating every transaction at the point of sale.</p>
            </div>
            <div>
              <h3>Agentic AI & M-Pesa Integration</h3>
              <p>Modern systems now go beyond simple recording. They use autonomous agents to reconcile M-Pesa statements, predict inventory shortages, and manage supply chain triage without human intervention.</p>
            </div>
          </div>
          <p style={{ marginTop: '2rem' }}>
            <strong>Operational Impact:</strong> Kenyan firms adopting high-level automation report handling up to 3x the transaction volume with the same team size, leading to a significant increase in operating margins.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
