import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./services.module.css";

export default function Services() {
  const services = [
    {
      title: "Enterprise ERP Systems",
      description: "Custom-built hubs that consolidate your finance, CRM, HR, and inventory. Move away from disconnected spreadsheets and into a single source of truth.",
      features: ["Multi-user permissions", "M-Pesa payment reconciliation", "Automated financial reporting", "KRA eTIMS integration"],
      icon: "🏗️"
    },
    {
      title: "SaaS Platform Development",
      description: "Scalable, multi-tenant software-as-a-service architectures. Built for performance, security, and global scale from day one.",
      features: ["Subscription management", "Secure data isolation", "API-first architecture", "High-performance indexing"],
      icon: "🚀"
    },
    {
      title: "Business Process Automation",
      description: "Eliminate manual data entry and repetitive tasks. I build custom bridges between your existing tools and new automated workflows.",
      features: ["Custom API integrations", "Workflow mapping", "Automated notifications", "Legacy system migration"],
      icon: "🔌"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="container">
        <section className={styles.hero}>
          <h1>Strategic Systems Architecture</h1>
          <p>Software designed to be the backbone of your growing business.</p>
        </section>

        <section className={styles.list}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <div className={styles.icon}>{service.icon}</div>
              <div className={styles.content}>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul className={styles.features}>
                  {service.features.map(f => <li key={f}>✓ {f}</li>)}
                </ul>
                <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">See if you're a good fit</a>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.cta}>
          <h2>Not sure what you need?</h2>
          <p>Let's map out your current business bottlenecks and find the right solution.</p>
          <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">See if you're a good fit</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
