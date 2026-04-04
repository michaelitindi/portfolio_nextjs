"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./costing.module.css";

export default function UnitCosting() {
  const [rawMaterials, setRawMaterials] = useState(500000);
  const [labor, setLabor] = useState(150000);
  const [overhead, setOverhead] = useState(100000); // Electricity, water, rent
  const [batchSize, setBatchSize] = useState(1000);
  const [markup, setMarkup] = useState(30); // %

  const totalBatchCost = rawMaterials + labor + overhead;
  const costPerUnit = totalBatchCost / batchSize;
  const sellingPrice = costPerUnit * (1 + markup / 100);

  return (
    <>
      <Navbar />
      <main className="container">
        <section className={styles.hero}>
          <h1>Manufacturing Unit Costing Engine</h1>
          <p>Determine your true cost of production and set profitable margins using precise batch-level data.</p>
        </section>

        <section className={styles.calculatorGrid}>
          <div className={styles.inputs}>
            <div className={styles.field}>
              <label>Total Raw Material Cost (Batch)</label>
              <input type="number" value={rawMaterials} onChange={(e) => setRawMaterials(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Total Direct Labor (Batch)</label>
              <input type="number" value={labor} onChange={(e) => setLabor(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Indirect Overheads (Power/Water/Rent)</label>
              <input type="number" value={overhead} onChange={(e) => setOverhead(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Batch Size (Units Produced)</label>
              <input type="number" value={batchSize} onChange={(e) => setBatchSize(Number(e.target.value))} />
            </div>
            <div className={styles.field}>
              <label>Target Profit Markup (%)</label>
              <input type="number" value={markup} onChange={(e) => setMarkup(Number(e.target.value))} />
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultCard}>
              <h3>True Cost Per Unit</h3>
              <p className={styles.amount}>KES {costPerUnit.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
            </div>
            <div className={`${styles.resultCard} ${styles.highlight}`}>
              <h3>Recommended Selling Price</h3>
              <p className={styles.amount}>KES {sellingPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
              <p className={styles.note}>Batch Margin: KES {(sellingPrice * batchSize - totalBatchCost).toLocaleString()}</p>
            </div>
            <div className={styles.pitch}>
              <h3>Precision leads to profitability.</h3>
              <p>I build custom Bill of Materials (BOM) modules that automatically pull real-time pricing for raw materials and energy consumption to give you live unit costing for every production line.</p>
              <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">See if you're a good fit</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
