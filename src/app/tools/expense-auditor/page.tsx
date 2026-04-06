"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./auditor.module.css";

export default function DeductionAuditor() {
  const [annualExpenses, setAnnualExpenses] = useState(5000000);
  const [nonCompliantPercent, setNonCompliantPercent] = useState(20); // % of vendors not on eTIMS

  // 2026 Context: Standard Corporate Tax is 30%
  const corporateTaxRate = 0.30;
  const nonDeductibleAmount = annualExpenses * (nonCompliantPercent / 100);
  const taxLoss = nonDeductibleAmount * corporateTaxRate;

  return (
    <>
      <Navbar />
      <main className="container">
        <section className={styles.hero}>
          <h1>2026 Expense Deduction Auditor</h1>
          <p>Under the new "No eTIMS, No Deduction" rule, using non-compliant vendors is costing you thousands in extra tax.</p>
        </section>

        <section className={styles.calculatorGrid}>
          <div className={styles.inputs}>
            <div className={styles.field}>
              <label>Total Annual Business Expenses (KES)</label>
              <input type="number" value={annualExpenses} onChange={(e) => setAnnualExpenses(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Estimated Non-eTIMS Vendors (%)</label>
              <input type="range" min="0" max="100" value={nonCompliantPercent} onChange={(e) => setNonCompliantPercent(Number(e.target.value))} />
              <span>{nonCompliantPercent}% of your suppliers</span>
            </div>
            <p className={styles.hint}>In 2026, KRA cross-references your expense claims against the eTIMS database automatically.</p>
          </div>

          <div className={styles.results}>
            <div className={styles.resultCard}>
              <h3>Invalid Expenses</h3>
              <p className={styles.amount}>KES {nonDeductibleAmount.toLocaleString()}</p>
              <p className={styles.subnote}>These expenses will be disallowed by KRA during your next audit.</p>
            </div>
            <div className={`${styles.resultCard} ${styles.highlight}`}>
              <h3>Extra Tax to Pay</h3>
              <p className={styles.amount}>KES {taxLoss.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              <p className={styles.note}>This is the "Hidden Tax" of non-compliance.</p>
            </div>
            <div className={styles.pitch}>
              <h3>Automate your vendor compliance.</h3>
              <p>Implement custom AP (Accounts Payable) systems that automatically verify a vendor's eTIMS status before allowing a payment to be processed.</p>
              <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">See if you're a good fit</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
