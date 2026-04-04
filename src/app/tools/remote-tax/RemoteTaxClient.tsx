"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./remote.module.css";

const toolInfo = {
  title: "Remote Work Tax Compliance Tool (2026)",
  description: "Convert USD/GBP salaries to KES and audit your KRA tax obligations, including the latest 2026 PAYE brackets, SHIF, and Housing Levy.",
};

export default function RemoteTaxClient() {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState(5000);
  const [exchangeRate, setExchangeRate] = useState(135); // 2026 estimate

  const monthlyKES = amount * exchangeRate;
  
  // Simplified 2026 PAYE Logic
  const calculatePAYE = (taxableIncome: number) => {
    let tax = 0;
    if (taxableIncome > 24000) tax += (Math.min(taxableIncome, 32333) - 24000) * 0.25;
    if (taxableIncome > 32333) tax += (Math.min(taxableIncome, 500000) - 32333) * 0.30;
    if (taxableIncome > 500000) tax += (Math.min(taxableIncome, 800000) - 500000) * 0.325;
    if (taxableIncome > 800000) tax += (taxableIncome - 800000) * 0.35;
    return tax;
  };

  const paye = calculatePAYE(monthlyKES);
  const shif = monthlyKES * 0.0275;
  const housingLevy = monthlyKES * 0.015;
  const nssf = 2160; // 2026 Tier II cap estimate
  
  const netTakeHome = monthlyKES - paye - shif - housingLevy - nssf;

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Kenya Remote Tax Calculator",
    "operatingSystem": "All",
    "applicationCategory": "FinancialApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KES"
    },
    "description": "Calculates KRA tax liability for remote employees and contractors earning in foreign currency in 2026."
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
              <label>Salary Currency</label>
              <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option value="USD">USD - US Dollar</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="EUR">EUR - Euro</option>
              </select>
            </div>
            <div className={styles.field}>
              <label>Monthly Gross Amount</label>
              <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(Number(e.target.value))} 
              />
            </div>
            <div className={styles.field}>
              <label>Exchange Rate ({currency} to KES)</label>
              <input 
                type="number" 
                value={exchangeRate} 
                onChange={(e) => setExchangeRate(Number(e.target.value))} 
              />
              <p className={styles.helpText}>2026 market average estimate.</p>
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultCard}>
              <h3>Gross Monthly (KES)</h3>
              <p className={styles.amount}>KES {monthlyKES.toLocaleString()}</p>
            </div>
            <div className={styles.resultCard}>
              <h3>KRA PAYE + SHIF + Levy</h3>
              <p className={styles.amount}>KES {(paye + shif + housingLevy).toLocaleString()}</p>
              <small>Total statutory deductions for the 2026 fiscal year.</small>
            </div>
            <div className={styles.resultCard + " " + styles.highlight}>
              <h3>Net Take-Home (KES)</h3>
              <p className={styles.amount}>KES {netTakeHome.toLocaleString()}</p>
              <small>Estimated monthly disposable income in Kenya.</small>
            </div>
            <div className={styles.cta}>
              <p>Scaling a remote team in Kenya?</p>
              <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Get a Compliance Audit</a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Remote Work Taxation in 2026</h2>
          <p>
            In 2026, the KRA has implemented advanced tracking for foreign currency inflows. Remote workers (contractors or employees) must correctly classify their income to avoid penalties under the Digital Service Tax or income tax non-disclosure.
          </p>
          <div className="grid grid-2">
            <div>
              <h3>SHIF & Housing Levy</h3>
              <p>Mandatory contributions to the Social Health Insurance Fund (2.75%) and the Affordable Housing Levy (1.5%) apply to all income earned in Kenya, regardless of the employer's location.</p>
            </div>
            <div>
              <h3>Double Taxation Agreements</h3>
              <p>Check if your employer's country has a DTA with Kenya. In 2026, these treaties are strictly audited to ensure proper tax credit allocation between jurisdictions.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
