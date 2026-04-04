"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./solar.module.css";

const toolInfo = {
  title: "Solar ROI & KPLC Comparison (2026)",
  description: "Evaluate the strategic financial benefit of transitioning to solar power by comparing current KPLC tariffs with 2026 solar installation metrics.",
};

export default function SolarROIClient() {
  const [monthlyBill, setMonthlyBill] = useState(15000);
  const [systemSize, setSystemSize] = useState(5); // in kW

  const kplcRate = 32; // KES per kWh in 2026
  const solarCostPerKW = 155000; // 2026 average installed cost
  
  const totalInstallationCost = systemSize * solarCostPerKW;
  const annualSavings = monthlyBill * 12 * 0.85; // Assuming 85% offset
  const paybackYears = totalInstallationCost / annualSavings;

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Kenya Solar ROI Calculator",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KES"
    },
    "description": "Calculates the financial payback and ROI of solar power systems in Kenya based on 2026 KPLC energy rates."
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
              <label>Average Monthly KPLC Bill (KES)</label>
              <input 
                type="number" 
                value={monthlyBill} 
                onChange={(e) => setMonthlyBill(Number(e.target.value))} 
              />
            </div>
            <div className={styles.field}>
              <label>Target System Size (kWp)</label>
              <input 
                type="number" 
                value={systemSize} 
                onChange={(e) => setSystemSize(Number(e.target.value))} 
              />
              <p className={styles.helpText}>5kWp is typical for a medium household or small office.</p>
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultCard}>
              <h3>Estimated Setup Cost</h3>
              <p className={styles.amount}>KES {totalInstallationCost.toLocaleString()}</p>
              <small>Includes Tier 1 panels, hybrid inverter, and 2026 labor rates.</small>
            </div>
            <div className={styles.resultCard}>
              <h3>Annual Energy Savings</h3>
              <p className={styles.amount}>KES {Math.round(annualSavings).toLocaleString()}</p>
              <small>Based on 2026 KPLC Tier 2 tariffs and 4.5 daily peak sun hours.</small>
            </div>
            <div className={styles.resultCard + " " + styles.highlight}>
              <h3>Strategic Payback</h3>
              <p className={styles.amount}>{paybackYears.toFixed(1)} Years</p>
              <small>Standard lifecycle for solar components is 20-25 years.</small>
            </div>
            <div className={styles.cta}>
              <p>Planning a commercial solar transition?</p>
              <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Get a Technical Audit</a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <h2>The Economics of Solar in 2026 Kenya</h2>
          <p>
            With KPLC tariffs reaching new highs in 2026, energy self-sufficiency has shifted from a "green choice" to a financial necessity for Kenyan businesses.
          </p>
          <div className="grid grid-2">
            <div>
              <h3>Hybrid Systems & Storage</h3>
              <p>In 2026, the standard installation is "Hybrid" (Panel + Battery + Grid). This ensures 100% uptime during the frequent load-shedding cycles experienced across the EAC region.</p>
            </div>
            <div>
              <h3>KRA Solar Incentives</h3>
              <p>Specialized solar equipment remains zero-rated for VAT in 2026. Businesses can also claim a 50% Investment Deduction (ID) on their initial installation costs against their corporate tax liability.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
