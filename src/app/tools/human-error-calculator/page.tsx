"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./human-error.module.css";

export default function HumanErrorCalculator() {
  const [monthlyInvoices, setMonthlyInvoices] = useState(500);
  const [errorRate, setErrorRate] = useState(2); // %
  const [fixTime, setFixTime] = useState(30); // minutes per error
  const [staffHourlyRate, setStaffHourlyRate] = useState(1000); // KES

  const totalErrors = (monthlyInvoices * (errorRate / 100));
  const monthlyHoursLost = (totalErrors * fixTime) / 60;
  const directFinancialLoss = monthlyHoursLost * staffHourlyRate;
  const annualLoss = directFinancialLoss * 12;

  return (
    <>
      <Navbar />
      <main className="container">
        <section className={styles.hero}>
          <h1>Manual vs. Automated Cost Tool</h1>
          <p>Spreadsheets don't just waste time—they create expensive errors. Calculate the "Hidden Tax" of manual data entry.</p>
        </section>

        <section className={styles.calculatorGrid}>
          <div className={styles.inputs}>
            <div className={styles.field}>
              <label>Monthly Volume (Invoices/Orders)</label>
              <input type="number" value={monthlyInvoices} onChange={(e) => setMonthlyInvoices(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Typical Error Rate (%)</label>
              <input type="range" min="0.5" max="10" step="0.5" value={errorRate} onChange={(e) => setErrorRate(Number(e.target.value))} />
              <span>{errorRate}% (Industry avg is 1-3%)</span>
            </div>
            <div className={styles.field}>
              <label>Time to Fix One Error (Mins)</label>
              <input type="number" value={fixTime} onChange={(e) => setFixTime(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Staff Hourly Rate (KES)</label>
              <input type="number" value={staffHourlyRate} onChange={(e) => setStaffHourlyRate(Number(e.target.value))} />
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultCard}>
              <h3>Monthly Errors Generated</h3>
              <p className={styles.amount}>{totalErrors.toFixed(0)} Errors</p>
            </div>
            <div className={styles.resultCard}>
              <h3>Staff Time Wasted (Monthly)</h3>
              <p className={styles.amount}>{monthlyHoursLost.toFixed(1)} Hours</p>
            </div>
            <div className={`${styles.resultCard} ${styles.highlight}`}>
              <h3>Annual Cost of Human Error</h3>
              <p className={styles.amount}>KES {annualLoss.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              <p className={styles.note}>This excludes reputation damage and lost customer trust.</p>
            </div>
            <div className={styles.cta}>
              <p>Ready to eliminate manual waste?</p>
              <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">See if you're a good fit</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
