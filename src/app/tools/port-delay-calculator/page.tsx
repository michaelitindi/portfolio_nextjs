"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./logistics.module.css";

export default function LogisticsCalculator() {
  const [containerCount, setContainerCount] = useState(1);
  const [delayDays, setDelayDays] = useState(5);
  const [containerType, setContainerCountType] = useState(20); // 20ft vs 40ft

  const dailyDemurrage = containerType === 20 ? 3000 : 6000; // Approx KES rates after free period
  const totalDemurrage = containerCount * delayDays * dailyDemurrage;
  const portStorageFees = containerCount * delayDays * 2000; // Simplified
  const totalDelayCost = totalDemurrage + portStorageFees;

  return (
    <>
      <Navbar />
      <main className="container">
        <section className={styles.hero}>
          <h1>Port Delay & Demurrage Tool</h1>
          <p>Estimate the hidden costs of Port of Mombasa delays and identify your logistics risk exposure.</p>
        </section>

        <section className={styles.calculatorGrid}>
          <div className={styles.inputs}>
            <div className={styles.field}>
              <label>Number of Containers</label>
              <input type="number" value={containerCount} onChange={(e) => setContainerCount(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Container Size</label>
              <select value={containerType} onChange={(e) => setContainerCountType(Number(e.target.value))}>
                <option value={20}>20 Foot Container</option>
                <option value={40}>40 Foot Container</option>
              </select>
            </div>
            <div className={styles.field}>
              <label>Estimated Delay Days (Beyond free period)</label>
              <input type="number" value={delayDays} onChange={(e) => setDelayDays(Number(e.target.value))} />
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultCard}>
              <h3>Estimated Demurrage</h3>
              <p className={styles.amount}>KES {totalDemurrage.toLocaleString()}</p>
            </div>
            <div className={`${styles.resultCard} ${styles.highlight}`}>
              <h3>Total Potential Loss</h3>
              <p className={styles.amount}>KES {totalDelayCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              <p className={styles.note}>Includes estimated KPA storage and shipping line demurrage.</p>
            </div>
            <div className={styles.pitch}>
              <h3>Predictability is profit.</h3>
              <p>I build custom supply chain dashboards that integrate with Port tracking APIs, allowing your team to proactively manage documentation and minimize expensive terminal delays.</p>
              <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">See if you're a good fit</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
