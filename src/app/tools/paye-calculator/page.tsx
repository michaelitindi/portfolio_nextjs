"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./paye.module.css";

export default function PayeCalculator() {
  const [grossSalary, setGrossSalary] = useState(50000);

  // Simplified 2024 Kenya PAYE calculation (illustrative)
  const calculatePaye = (gross: number) => {
    let taxable = gross - 2400; // Personal relief / NSSF deduction approx
    if (taxable <= 24000) return 0;
    
    let tax = 0;
    // 10% on first 24,000
    tax += 24000 * 0.1;
    taxable -= 24000;
    
    // 25% on next 8,333
    if (taxable > 0) {
      const slab = Math.min(taxable, 8333);
      tax += slab * 0.25;
      taxable -= slab;
    }
    
    // 30% on remaining
    if (taxable > 0) {
      tax += taxable * 0.3;
    }

    return Math.max(0, tax - 2400); // Less personal relief
  };

  const nssf = 2160; // Standard 2024 tier II
  const nhif = grossSalary * 0.0275; // New SHIF rate approx
  const paye = calculatePaye(grossSalary);
  const netSalary = grossSalary - nssf - nhif - paye;

  return (
    <>
      <Navbar />
      <main className="container">
        <section className={styles.hero}>
          <h1>Kenya PAYE & Net Salary Calculator</h1>
          <p>Estimate take-home pay for Kenyan employees based on 2024 tax regulations.</p>
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
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultCard}>
              <h3>Deductions</h3>
              <div className={styles.statLine}><span>NSSF:</span> <span>KES {nssf.toLocaleString()}</span></div>
              <div className={styles.statLine}><span>SHIF (2.75%):</span> <span>KES {nhif.toLocaleString()}</span></div>
              <div className={styles.statLine}><span>PAYE:</span> <span>KES {paye.toLocaleString()}</span></div>
            </div>
            <div className={`${styles.resultCard} ${styles.highlight}`}>
              <h3>Estimated Net Salary</h3>
              <p className={styles.amount}>KES {netSalary.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
            <div className={styles.payrollPitch}>
              <h3>Running payroll for a team?</h3>
              <p>Don't manage complex tax calculations in Excel. Implement automated payroll modules for ERPs that ensure 100% compliance with KRA, NSSF, and SHIF.</p>
              <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">See if you're a good fit</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
