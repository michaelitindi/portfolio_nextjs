"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./lending.module.css";

export default function LendingCalculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [flatRate, setFlatRate] = useState(12); // % per annum
  const [period, setPeriod] = useState(12); // months

  const totalInterest = (loanAmount * (flatRate / 100) * (period / 12));
  const totalRepayment = loanAmount + totalInterest;
  const monthlyPayment = totalRepayment / period;
  
  // Approximate Effective Interest Rate (Reducing Balance equivalent)
  const effectiveRate = ((2 * period * (flatRate / 100)) / (period + 1)) * 100;

  return (
    <>
      <Navbar />
      <main className="container">
        <section className={styles.hero}>
          <h1>Effective Interest vs. Flat Rate Tool</h1>
          <p>Decode the true cost of credit. Compare "Flat Rate" marketing with the actual "Reducing Balance" effective rate.</p>
        </section>

        <section className={styles.calculatorGrid}>
          <div className={styles.inputs}>
            <div className={styles.field}>
              <label>Loan Principal (KES)</label>
              <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Flat Interest Rate (% p.a.)</label>
              <input type="number" value={flatRate} onChange={(e) => setFlatRate(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Repayment Period (Months)</label>
              <input type="number" value={period} onChange={(e) => setPeriod(Number(e.target.value))} />
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultCard}>
              <h3>Monthly Repayment</h3>
              <p className={styles.amount}>KES {monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
            <div className={`${styles.resultCard} ${styles.highlight}`}>
              <h3>Effective Interest Rate</h3>
              <p className={styles.amount}>{effectiveRate.toFixed(1)}%</p>
              <p className={styles.note}>This is the true cost of the capital you are deploying.</p>
            </div>
            <div className={styles.pitch}>
              <h3>Scale your lending safely.</h3>
              <p>Implement custom core-banking modules for SACCOs and MFIs that automate loan lifecycle management, M-Pesa disbursement, and real-time interest yield reporting.</p>
              <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">See if you're a good fit</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
