"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./import.module.css";

export default function ImportCalculator() {
  const [cifValue, setCifValue] = useState(1000000); // Cost + Insurance + Freight in KES
  const [isSensitive, setIsSensitive] = useState(false); // EAC Sensitive Items list

  // 2026 Tax Rates
  const importDutyRate = isSensitive ? 0.35 : 0.25; // finished goods vs sensitive
  const idfRate = 0.035; // Import Declaration Fee
  const rdlRate = 0.025; // Railway Development Levy
  const vatRate = 0.16;

  // Calculation Steps
  const importDuty = cifValue * importDutyRate;
  const idf = cifValue * idfRate;
  const rdl = cifValue * rdlRate;
  const excisableValue = cifValue + importDuty;
  const exciseDuty = excisableValue * 0.10; // Assuming 10% standard excise for common goods
  const vatValue = cifValue + importDuty + exciseDuty + idf + rdl;
  const vat = vatValue * vatRate;

  const totalTaxes = importDuty + idf + rdl + exciseDuty + vat;
  const totalLandingCost = cifValue + totalTaxes;

  return (
    <>
      <Navbar />
      <main className="container">
        <section className={styles.hero}>
          <h1>2026 Import & Landing Cost Engine</h1>
          <p>Calculate total KRA taxes and EAC Common External Tariff (CET) costs for your inventory.</p>
        </section>

        <section className={styles.calculatorGrid}>
          <div className={styles.inputs}>
            <div className={styles.field}>
              <label>CIF Value (KES) - Cost, Insurance, Freight</label>
              <input type="number" value={cifValue} onChange={(e) => setCifValue(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" checked={isSensitive} onChange={(e) => setIsSensitive(e.target.checked)} />
                Is this a "Sensitive" item? (e.g. Textiles, Sugar, Cement)
              </label>
              <p className={styles.hint}>Sensitive items attract a higher 35% duty to protect local manufacturing.</p>
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultCard}>
              <h3>Tax Breakdown</h3>
              <div className={styles.statLine}><span>Import Duty ({importDutyRate * 100}%):</span> <span>KES {importDuty.toLocaleString()}</span></div>
              <div className={styles.statLine}><span>Excise Duty (10%):</span> <span>KES {exciseDuty.toLocaleString()}</span></div>
              <div className={styles.statLine}><span>IDF & RDL (6%):</span> <span>KES {(idf + rdl).toLocaleString()}</span></div>
              <div className={styles.statLine}><span>VAT (16%):</span> <span>KES {vat.toLocaleString()}</span></div>
            </div>
            <div className={`${styles.resultCard} ${styles.highlight}`}>
              <h3>Total Landing Cost</h3>
              <p className={styles.amount}>KES {totalLandingCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              <p className={styles.note}>Tax burden: {((totalTaxes / cifValue) * 100).toFixed(1)}% of product cost.</p>
            </div>
            <div className={styles.pitch}>
              <h3>Protect your margins.</h3>
              <p>Implement custom procurement modules that automatically track landing costs per SKU, ensuring your pricing always accounts for the latest 2026 KRA tax shifts.</p>
              <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">See if you're a good fit</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
