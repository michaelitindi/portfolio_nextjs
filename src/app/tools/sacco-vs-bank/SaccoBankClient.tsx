"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./sacco.module.css";

const toolInfo = {
  title: "Sacco vs Bank Loan Comparison (2026)",
  description: "Audit the true cost of credit by comparing Sacco reducing balance rates with commercial bank offerings in the 2026 Kenyan lending market.",
};

export default function SaccoBankClient() {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [term, setTerm] = useState(36); // months

  const saccoRate = 0.12;
  const bankRate = 0.22; // 2026 average

  const calculateMonthly = (principal: number, annualRate: number, months: number) => {
    const monthlyRate = annualRate / 12;
    return (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  };

  const saccoMonthly = calculateMonthly(loanAmount, saccoRate, term);
  const bankMonthly = calculateMonthly(loanAmount, bankRate, term);
  
  const saccoTotalInterest = (saccoMonthly * term) - loanAmount;
  const bankTotalInterest = (bankMonthly * term) - loanAmount;
  const savings = bankTotalInterest - saccoTotalInterest;

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Sacco vs Bank Comparison Tool",
    "operatingSystem": "All",
    "applicationCategory": "FinancialApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KES"
    },
    "description": "Compares the cost of borrowing between Saccos and Commercial Banks in Kenya for 2026."
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
              <label>Requested Loan Principal (KES)</label>
              <input 
                type="number" 
                value={loanAmount} 
                onChange={(e) => setLoanAmount(Number(e.target.value))} 
              />
            </div>
            <div className={styles.field}>
              <label>Repayment Period (Months)</label>
              <input 
                type="number" 
                value={term} 
                onChange={(e) => setTerm(Number(e.target.value))} 
              />
            </div>
            <div className={styles.field}>
              <label>Sacco Rate (12%) vs Bank Rate (22%)</label>
              <p className={styles.helpText}>Using 2026 industry averages for reducing balance loans.</p>
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultCard}>
              <h3>Sacco Monthly Repayment</h3>
              <p className={styles.amount}>KES {Math.round(saccoMonthly).toLocaleString()}</p>
              <small>Calculated on a standard 1% monthly reducing rate.</small>
            </div>
            <div className={styles.resultCard}>
              <h3>Bank Monthly Repayment</h3>
              <p className={styles.amount}>KES {Math.round(bankMonthly).toLocaleString()}</p>
              <small>Based on 2026 risk-based pricing models.</small>
            </div>
            <div className={styles.resultCard + " " + styles.highlight}>
              <h3>Total Sacco Interest Savings</h3>
              <p className={styles.amount}>KES {Math.round(savings).toLocaleString()}</p>
              <small>Over the full {term}-month term of the loan.</small>
            </div>
            <div className={styles.cta}>
              <p>Optimizing your corporate debt structure?</p>
              <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Get a Strategic Review</a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Sacco vs. Bank: The 2026 Credit Landscape</h2>
          <p>
            In 2026, the cost of credit remains a primary constraint for Kenyan businesses. While Saccos offer lower nominal rates, Banks provide higher flexibility and speed of disbursement.
          </p>
          <div className="grid grid-2">
            <div>
              <h3>The "Multiplier" Rule</h3>
              <p>Saccos in 2026 typically allow you to borrow up to 3x or 4x your total deposits. This "forced saving" requirement is a key differentiator from bank lending, where collateral or cash flow is the primary benchmark.</p>
            </div>
            <div>
              <h3>Dividend Offsets</h3>
              <p>A unique benefit of Saccos is the annual dividend on deposits. In 2026, high-performing Saccos report dividends of 12-15%, which can effectively offset a significant portion of your loan interest costs.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
