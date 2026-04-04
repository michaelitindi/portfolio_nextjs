"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./property.module.css";

export default function PropertyCalculator() {
  const [rent, setRent] = useState(50000);
  const [units, setUnits] = useState(5);
  const [serviceCharge, setServiceCharge] = useState(5000);
  const [maintenancePercent, setMaintenancePercent] = useState(5);

  const totalGrossRent = rent * units;
  const mriTax = totalGrossRent * 0.10; // Monthly Rental Income Tax 10%
  const maintenanceCost = totalGrossRent * (maintenancePercent / 100);
  const totalServiceCharge = serviceCharge * units;
  const netProfit = totalGrossRent - mriTax - maintenanceCost - totalServiceCharge;

  return (
    <>
      <Navbar />
      <main className="container">
        <section className={styles.hero}>
          <h1>Rental Income & MRI Optimizer</h1>
          <p>Calculate your net rental yield after KRA Monthly Rental Income (MRI) tax and operational costs.</p>
        </section>

        <section className={styles.calculatorGrid}>
          <div className={styles.inputs}>
            <div className={styles.field}>
              <label>Rent Per Unit (KES)</label>
              <input type="number" value={rent} onChange={(e) => setRent(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Number of Occupied Units</label>
              <input type="number" value={units} onChange={(e) => setUnits(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Service Charge Per Unit (KES)</label>
              <input type="number" value={serviceCharge} onChange={(e) => setServiceCharge(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Maintenance Reserve (%)</label>
              <input type="range" min="0" max="20" value={maintenancePercent} onChange={(e) => setMaintenancePercent(Number(e.target.value))} />
              <span>{maintenancePercent}% of gross</span>
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultCard}>
              <h3>KRA MRI Tax (10%)</h3>
              <p className={styles.amount}>KES {mriTax.toLocaleString()}</p>
              <p className={styles.hint}>MRI Tax is calculated on gross rent before any expenses.</p>
            </div>
            <div className={`${styles.resultCard} ${styles.highlight}`}>
              <h3>Monthly Net Profit</h3>
              <p className={styles.amount}>KES {netProfit.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              <p className={styles.note}>Yield: {((netProfit / totalGrossRent) * 100).toFixed(1)}% of gross revenue.</p>
            </div>
            <div className={styles.pitch}>
              <h3>Professionalize your property management.</h3>
              <p>Stop chasing tenants on WhatsApp. I build automated property systems that generate KRA-ready MRI reports, send automated rent reminders via SMS, and track maintenance tickets.</p>
              <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">See if you're a good fit</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
