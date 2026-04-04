"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./simulator.module.css";

export default function MpesaSimulator() {
  const [phone, setPhone] = useState("254700000000");
  const [amount, setAmount] = useState("100");
  const [status, setStatus] = useState<"idle" | "sending" | "received">("idle");

  const simulatePush = () => {
    setStatus("sending");
    setTimeout(() => {
      setStatus("received");
    }, 2000);
  };

  const mockResponse = {
    Body: {
      stkCallback: {
        MerchantRequestID: "29115-34620561-1",
        CheckoutRequestID: "ws_CO_19122023102010123",
        ResultCode: 0,
        ResultDesc: "The service request is processed successfully.",
        CallbackMetadata: {
          Item: [
            { Name: "Amount", Value: Number(amount) },
            { Name: "MpesaReceiptNumber", Value: "RKL7M2J4X9" },
            { Name: "TransactionDate", Value: new Date().toISOString().replace(/[-:T.]/g, "").slice(0, 14) },
            { Name: "PhoneNumber", Value: phone }
          ]
        }
      }
    }
  };

  return (
    <>
      <Navbar />
      <main className="container">
        <section className={styles.hero}>
          <h1>M-Pesa STK Push Simulator</h1>
          <p>See exactly how your system "talks" to M-Pesa. Trigger a mock payment and view the automated response data.</p>
        </section>

        <section className={styles.grid}>
          <div className={styles.controls}>
            <h3>1. Trigger STK Push</h3>
            <div className={styles.field}>
              <label>Customer Phone Number</label>
              <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className={styles.field}>
              <label>Amount (KES)</label>
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <button 
              className="btn-primary" 
              onClick={simulatePush}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending Push..." : "Simulate STK Push"}
            </button>
            <p className={styles.hint}>This will not charge your phone. It is a technical simulation.</p>
          </div>

          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.title}>System Webhook Logs</span>
            </div>
            <div className={styles.terminalBody}>
              {status === "idle" && <p className={styles.muted}>// Waiting for trigger...</p>}
              {status === "sending" && <p className={styles.loading}>Connecting to Safaricom Daraja API...</p>}
              {status === "received" && (
                <pre className={styles.code}>
                  {JSON.stringify(mockResponse, null, 2)}
                </pre>
              )}
            </div>
          </div>
        </section>

        <section className={styles.pitch}>
          <div className={styles.pitchContent}>
            <h2>Convert this data into growth.</h2>
            <p>I build custom "Listeners" that take this M-Pesa data and automatically update your inventory, send SMS receipts, and reconcile your bank accounts in seconds.</p>
            <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">See if you're a good fit</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
