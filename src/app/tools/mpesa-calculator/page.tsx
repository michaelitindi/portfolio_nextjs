"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./mpesa.module.css";

export default function MpesaCalculator() {
  const [amount, setAmount] = useState(1000);
  const [transactionType, setTransactionType] = useState("buy-goods");

  // Simplified M-Pesa business fees (approximate for demonstration)
  const getFee = (amt: number, type: string) => {
    if (type === "buy-goods") return 0; // Usually paid by merchant (1% of total)
    if (type === "paybill") {
      if (amt <= 100) return 0;
      if (amt <= 500) return 6;
      if (amt <= 1000) return 12;
      return 23; // Flat cap for many paybills or ~0.5%
    }
    return amt * 0.005; // Default assumption
  };

  const fee = getFee(amount, transactionType);
  const total = amount + fee;

  return (
    <>
      <Navbar />
      <main className="container">
        <section className={styles.hero}>
          <h1>M-Pesa Business Fee Calculator</h1>
          <p>Quickly calculate transaction costs for Paybill and Buy Goods & Services.</p>
        </section>

        <section className={styles.calculatorGrid}>
          <div className={styles.inputs}>
            <div className={styles.field}>
              <label>Transaction Amount (KES)</label>
              <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(Number(e.target.value))} 
              />
            </div>
            <div className={styles.field}>
              <label>Transaction Type</label>
              <select 
                value={transactionType} 
                onChange={(e) => setTransactionType(e.target.value)}
              >
                <option value="buy-goods">Buy Goods & Services (Lipa na M-Pesa)</option>
                <option value="paybill">Paybill (Customer to Business)</option>
                <option value="withdrawal">Agent Withdrawal</option>
              </select>
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultCard}>
              <h3>Estimated Fee</h3>
              <p className={styles.amount}>KES {fee.toLocaleString()}</p>
            </div>
            <div className={`${styles.resultCard} ${styles.highlight}`}>
              <h3>Total Cost</h3>
              <p className={styles.amount}>KES {total.toLocaleString()}</p>
              <p className={styles.note}>Fees vary based on tariff and merchant category.</p>
            </div>
            <div className={styles.integrationPitch}>
              <h3>Want to automate your M-Pesa reconciliation?</h3>
              <p>Stop manually checking SMS confirmations. Implement systems that link M-Pesa directly to your ERP or Accounting software.</p>
              <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">See if you're a good fit</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
