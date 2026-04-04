"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./trip.module.css";

export default function TripProfitability() {
  const [revenue, setRevenue] = useState(150000); // KES for the trip
  const [distance, setDistance] = useState(1000); // km (e.g. MSA-NRB round trip)
  const [fuelPrice, setFuelPrice] = useState(200); // KES per Litre
  const [consumption, setConsumption] = useState(3.5); // km per Litre
  const [perDiem, setPerDiem] = useState(15000); // Driver allowances
  const [tolls, setTolls] = useState(5000); // Expressway / bypasses

  // Calculations
  const fuelUsed = distance / consumption;
  const fuelCost = fuelUsed * fuelPrice;
  const totalDirectCosts = fuelCost + perDiem + tolls;
  const netProfit = revenue - totalDirectCosts;
  const costPerKm = totalDirectCosts / distance;

  return (
    <>
      <Navbar />
      <main className="container">
        <section className={styles.hero}>
          <h1>Transport Trip Profitability Tool</h1>
          <p>Calculate your net margin per trip. Factors in 2026 fuel prices, per-diems, and Expressway tolls.</p>
        </section>

        <section className={styles.calculatorGrid}>
          <div className={styles.inputs}>
            <div className={styles.field}>
              <label>Trip Revenue (KES)</label>
              <input type="number" value={revenue} onChange={(e) => setRevenue(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Round-trip Distance (KM)</label>
              <input type="number" value={distance} onChange={(e) => setDistance(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Fuel Price (KES / Litre)</label>
              <input type="number" value={fuelPrice} onChange={(e) => setFuelPrice(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Truck Consumption (KM per Litre)</label>
              <input type="number" step="0.1" value={consumption} onChange={(e) => setConsumption(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Driver Per-Diem & Incidentals (KES)</label>
              <input type="number" value={perDiem} onChange={(e) => setPerDiem(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Tolls & Port Charges (KES)</label>
              <input type="number" value={tolls} onChange={(e) => setTolls(Number(e.target.value))} />
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultCard}>
              <h3>Estimated Fuel Cost</h3>
              <p className={styles.amount}>KES {fuelCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
            <div className={`${styles.resultCard} ${styles.highlight}`}>
              <h3>Net Trip Profit</h3>
              <p className={styles.amount}>KES {netProfit.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              <p className={styles.note}>Margin: {((netProfit / revenue) * 100).toFixed(1)}% | Cost per KM: KES {costPerKm.toFixed(1)}</p>
            </div>
            <div className={styles.pitch}>
              <h3>Know your profit before the key turns.</h3>
              <p>I build custom fleet management modules that integrate with fuel card APIs and M-Pesa to track real-time trip expenses and prevent fuel siphoning leakage.</p>
              <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">See if you're a good fit</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
