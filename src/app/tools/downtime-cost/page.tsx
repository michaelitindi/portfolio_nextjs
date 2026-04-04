"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./downtime.module.css";

export default function DowntimeCalculator() {
  const [revenue, setRevenue] = useState(1000000); // Annual revenue KES
  const [downtimeHours, setDowntimeHours] = useState(24); // Hours per year
  const [reputationImpact, setReputationImpact] = useState(2); // Multiplier

  const hourlyRevenue = revenue / (365 * 24);
  const directLoss = hourlyRevenue * downtimeHours;
  const totalLoss = directLoss * reputationImpact;

  return (
    <>
      <Navbar />
      <main className="container">
        <section className={styles.hero}>
          <h1>Downtime Cost Calculator</h1>
          <p>Technical debt and poor architecture aren't just annoying—they're expensive.</p>
        </section>

        <section className={styles.calculatorGrid}>
          <div className={styles.inputs}>
            <div className={styles.field}>
              <label>Annual Digital Revenue (KES)</label>
              <input 
                type="number" 
                value={revenue} 
                onChange={(e) => setRevenue(Number(e.target.value))} 
              />
            </div>
            <div className={styles.field}>
              <label>Estimated Annual Downtime (Hours)</label>
              <input 
                type="number" 
                value={downtimeHours} 
                onChange={(e) => setDowntimeHours(Number(e.target.value))} 
              />
            </div>
            <div className={styles.field}>
              <label>Reputation & Productivity Multiplier</label>
              <select 
                value={reputationImpact} 
                onChange={(e) => setReputationImpact(Number(e.target.value))}
              >
                <option value={1.5}>Low (Internal Tools)</option>
                <option value={2.5}>Medium (B2B Services)</option>
                <option value={5}>High (E-commerce/SaaS)</option>
              </select>
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultCard}>
              <h3>Direct Revenue Loss</h3>
              <p className={styles.amount}>KES {directLoss.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
            <div className={`${styles.resultCard} ${styles.highlight}`}>
              <h3>Total Economic Impact</h3>
              <p className={styles.amount}>KES {totalLoss.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              <p className={styles.note}>Includes lost leads, SEO damage, and team frustration.</p>
            </div>
            <div className={styles.cta}>
              <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">See if you're a good fit</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
