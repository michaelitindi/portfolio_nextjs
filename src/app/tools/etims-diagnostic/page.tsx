"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./diagnostic.module.css";

const toolInfo = {
  title: "eTIMS Compliance Diagnostic (2026)",
  description: "Assess your business's compliance with the latest KRA eTIMS mandates. Ensure your expenses remain tax-deductible in 2026.",
};

export default function ETIMSDiagnostic() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = [
    {
      id: "registered",
      question: "Is your business currently onboarded on eTIMS (USSD, Web, or VSCU)?",
      options: ["Yes", "No", "Not Sure"]
    },
    {
      id: "invoicing",
      question: "Do you issue an electronic tax invoice for every single B2B sale?",
      options: ["Always", "Sometimes", "Never"]
    },
    {
      id: "purchases",
      question: "Do you verify that your suppliers issue eTIMS invoices for all your business purchases?",
      options: ["Yes, every time", "Monthly reconciliation", "No"]
    },
    {
      id: "integration",
      question: "Is your invoicing system directly integrated with KRA's servers in real-time?",
      options: ["Yes (API/VSCU)", "No (Manual Entry)", "Not Sure"]
    }
  ];

  const handleAnswer = (id: string, option: string) => {
    setAnswers({ ...answers, [id]: option });
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      setStep(0); // Show results
    }
  };

  const getRiskLevel = () => {
    const values = Object.values(answers);
    if (values.includes("No") || values.includes("Never")) return "HIGH";
    if (values.includes("Sometimes") || values.includes("Manual Entry")) return "MEDIUM";
    return "LOW";
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "eTIMS Compliance Diagnostic Tool",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KES"
    },
    "description": "A 2026 diagnostic tool for Kenyan businesses to assess their KRA eTIMS compliance status and tax-deductibility risks."
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

        <section className={styles.diagnosticBox}>
          {step > 0 ? (
            <div className={styles.questionCard}>
              <span className={styles.stepIndicator}>Step {step} of {questions.length}</span>
              <h2>{questions[step - 1].question}</h2>
              <div className={styles.options}>
                {questions[step - 1].options.map((option) => (
                  <button 
                    key={option} 
                    className="btn-secondary"
                    onClick={() => handleAnswer(questions[step - 1].id, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.resultsCard}>
              <div className={`${styles.badge} ${styles[getRiskLevel().toLowerCase()]}`}>
                {getRiskLevel()} RISK LEVEL
              </div>
              <h2>Diagnostic Results</h2>
              <p className={styles.summary}>
                {getRiskLevel() === "HIGH" 
                  ? "Your business is at significant risk of having expenses disallowed by KRA. In 2026, manual non-compliance can lead to double taxation on your gross revenue."
                  : getRiskLevel() === "MEDIUM"
                  ? "You have a baseline level of compliance, but manual processes and lack of real-time integration are creating audit vulnerabilities."
                  : "Your business is following the core eTIMS mandates, but ensure your 2026 purchase reconciliation is automated for maximum security."}
              </p>
              <div className={styles.ctaBox}>
                <h3>Protect Your Tax-Deductibility</h3>
                <p>Automated real-time eTIMS integration is now the standard for Kenyan businesses in 2026.</p>
                <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Get a Compliance Roadmap</a>
              </div>
            </div>
          )}
        </section>

        <section className={styles.content}>
          <h2>2026 KRA eTIMS Guidelines: What You Need to Know</h2>
          <div className="grid grid-3">
            <div className={styles.infoCard}>
              <h3>Strict Enforcement</h3>
              <p>As of January 2026, KRA iTax systems automatically flag and disallow any expense not supported by a valid eTIMS-generated invoice in your purchase report.</p>
            </div>
            <div className={styles.infoCard}>
              <h3>B2B Requirements</h3>
              <p>Every B2B transaction must capture the buyer's KRA PIN. Failure to do so prevents the buyer from claiming the expense as deductible for income tax.</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Automated Audits</h3>
              <p>Manual eTIMS entry is being phased out in favor of VSCU/OSCU integrations. System-to-system integration is the only way to ensure 100% accuracy and audit-proofing.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
