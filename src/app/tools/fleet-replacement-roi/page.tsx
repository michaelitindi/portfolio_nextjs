"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./fleet.module.css";

export default function FleetLifecycle() {
  const [currentMaintenance, setCurrentMaintenance] = useState(50000); // Monthly repairs
  const [currentFuelWaste, setCurrentFuelWaste] = useState(20000); // Inefficiency loss
  const [newTruckPrice, setNewTruckPrice] = useState(5000000);
  const [resaleValue, setResaleValue] = useState(1500000);
  const [interestRate, setLoanInterest] = useState(14); // % p.a.

  // Calculations
  const netInvestment = newTruckPrice - resaleValue;
  const monthlySavings = currentMaintenance + currentFuelWaste;
  const annualSavings = monthlySavings * 12;
  
  // Simple payback (ignoring interest for first look)
  const paybackMonths = netInvestment / monthlySavings;

  return (
    <>
      <Navbar />
      <main className="container">
        <section className={styles.hero}>
          <h1>Vehicle Replacement ROI Tool</h1>
          <p>Decide when to retire an asset. Compare rising maintenance costs of old trucks vs. the efficiency of a new fleet.</p>
        </section>

        <section className={styles.calculatorGrid}>
          <div className={styles.inputs}>
            <div className={styles.field}>
              <label>Monthly Repair Cost (Current)</label>
              <input type="number" value={currentMaintenance} onChange={(e) => setCurrentMaintenance(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Monthly Fuel Waste (Inefficiency)</label>
              <input type="number" value={currentFuelWaste} onChange={(e) => setCurrentFuelWaste(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>New Vehicle Price (KES)</label>
              <input type="number" value={newTruckPrice} onChange={(e) => setNewTruckPrice(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Current Asset Resale Value (KES)</label>
              <input type="number" value={resaleValue} onChange={(e) => setResaleValue(Number(e.target.value))} />
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultCard}>
              <h3>Annual Loss if Not Replaced</h3>
              <p className={styles.amount}>KES {annualSavings.toLocaleString()}</p>
            </div>
            <div className={`${styles.resultCard} ${styles.highlight}`}>
              <h3>Payback Period</h3>
              <p className={styles.amount}>{paybackMonths.toFixed(1)} Months</p>
              <p className={styles.note}>Based on maintenance and fuel savings alone.</p>
            </div>
            <div className={styles.pitch}>
              <h3>Data-driven fleet renewal.</h3>
              <p>Stop guessing which trucks are making money. Implement fleet management systems that track the exact TCO (Total Cost of Ownership) per vehicle, alerting you the moment an asset becomes a liability.</p>
              <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">See if you're a good fit</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
