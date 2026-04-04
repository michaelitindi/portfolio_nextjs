"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./oee.module.css";

export default function OEECalculator() {
  const [shiftTime, setShiftTime] = useState(480); // minutes (8 hours)
  const [downtime, setDowntime] = useState(60); // minutes
  const [idealCycleTime, setIdealCycleTime] = useState(1); // minutes per unit
  const [totalUnits, setTotalUnits] = useState(400);
  const [goodUnits, setGoodUnits] = useState(380);

  // OEE Calculations
  const availability = ((shiftTime - downtime) / shiftTime) * 100;
  const performance = ((idealCycleTime * totalUnits) / (shiftTime - downtime)) * 100;
  const quality = (goodUnits / totalUnits) * 100;
  const oee = (availability / 100) * (performance / 100) * (quality / 100) * 100;

  return (
    <>
      <Navbar />
      <main className="container">
        <section className={styles.hero}>
          <h1>Manufacturing OEE Dashboard</h1>
          <p>Measure your factory's true productivity. A score of 85% is considered world-class.</p>
        </section>

        <section className={styles.calculatorGrid}>
          <div className={styles.inputs}>
            <div className={styles.field}>
              <label>Planned Production Time (Mins)</label>
              <input type="number" value={shiftTime} onChange={(e) => setShiftTime(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Unplanned Downtime (Mins)</label>
              <input type="number" value={downtime} onChange={(e) => setDowntime(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Ideal Cycle Time (Mins/Unit)</label>
              <input type="number" step="0.1" value={idealCycleTime} onChange={(e) => setIdealCycleTime(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Total Units Produced</label>
              <input type="number" value={totalUnits} onChange={(e) => setTotalUnits(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Good Units (Non-defective)</label>
              <input type="number" value={goodUnits} onChange={(e) => setGoodUnits(Number(e.target.value))} />
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultHeader}>
              <h3>Overall Equipment Effectiveness</h3>
              <div className={styles.oeeScore} style={{ color: oee > 70 ? "#10b981" : "#ef4444" }}>
                {oee.toFixed(1)}%
              </div>
            </div>
            
            <div className={styles.statGrid}>
              <div className={styles.statCard}>
                <h4>Availability</h4>
                <p>{availability.toFixed(1)}%</p>
              </div>
              <div className={styles.statCard}>
                <h4>Performance</h4>
                <p>{performance.toFixed(1)}%</p>
              </div>
              <div className={styles.statCard}>
                <h4>Quality</h4>
                <p>{quality.toFixed(1)}%</p>
              </div>
            </div>

            <div className={styles.pitch}>
              <h3>Visualize your shop floor.</h3>
              <p>Stop relying on manual shift reports. I build custom MES (Manufacturing Execution Systems) that pull data directly from your machines to provide real-time OEE tracking and downtime alerts.</p>
              <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">See if you're a good fit</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
