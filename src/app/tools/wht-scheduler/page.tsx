"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./wht.module.css";

export default function WHTCalculator() {
  const [invoiceAmount, setInvoiceAmount] = useState(100000);
  const [serviceType, setServiceType] = useState("professional");

  // 2026 WHT Rates
  const rates: Record<string, number> = {
    professional: 0.05, // Management/Professional fees > 24k
    rent: 0.10, // Residential/Commercial rent
    consultancy: 0.05,
    dividends: 0.05,
    royalties: 0.05
  };

  const rate = rates[serviceType] || 0.05;
  const whtAmount = invoiceAmount * rate;
  const netPayment = invoiceAmount - whtAmount;

  // Deadline logic: 20th of the following month vs 5 working days for some categories
  // General rule: Remit on or before 20th of the next month.

  return (
    <>
      <Navbar />
      <main className="container">
        <section className={styles.hero}>
          <h1>KRA Withholding Tax (WHT) Scheduler</h1>
          <p>Calculate WHT deductions for professional services and track your iTax remittance deadlines.</p>
        </section>

        <section className={styles.calculatorGrid}>
          <div className={styles.inputs}>
            <div className={styles.field}>
              <label>Gross Invoice Amount (KES)</label>
              <input type="number" value={invoiceAmount} onChange={(e) => setInvoiceAmount(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Service Category</label>
              <select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
                <option value="professional">Professional / Management Fees (5%)</option>
                <option value="rent">Rental Income (10%)</option>
                <option value="consultancy">Consultancy Fees (5%)</option>
                <option value="royalties">Royalties (5%)</option>
              </select>
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultCard}>
              <h3>Amount to Withhold</h3>
              <p className={styles.amount}>KES {whtAmount.toLocaleString()}</p>
              <p className={styles.hint}>You must generate a WHT Certificate on iTax for the vendor.</p>
            </div>
            <div className={`${styles.resultCard} ${styles.highlight}`}>
              <h3>Net Payment to Vendor</h3>
              <p className={styles.amount}>KES {netPayment.toLocaleString()}</p>
            </div>
            <div className={styles.deadlineBox}>
              <h3>Remittance Deadline:</h3>
              <p>On or before the <strong>20th day</strong> of the following month.</p>
            </div>
            <div className={styles.pitch}>
              <h3>Avoid KRA late-remittance penalties.</h3>
              <p>Implement automated Finance modules that calculate WHT at the point of invoice entry and automatically flag upcoming deadlines for your accounts team.</p>
              <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">See if you're a good fit</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
