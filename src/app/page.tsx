import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.badge}>Systems Architect & Developer</span>
              <h1 className={styles.title}>
                Building the <span className={styles.highlight}>Operating System</span> for Your Business.
              </h1>
              <p className={styles.subtitle}>
                Stop fighting with spreadsheets. I build custom ERP systems, SaaS platforms, and automated workflows that help Kenyan businesses scale securely.
              </p>
              <div className={styles.ctaGroup}>
                <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">See if you're a good fit</a>
                <Link href="/portfolio" className={styles.secondaryLink}>View Case Studies →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className={styles.services}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>Strategic Digital Solutions</h2>
              <p>Tailored software designed to solve specific business bottlenecks.</p>
            </div>
            <div className="grid grid-3">
              <div className={styles.card}>
                <div className={styles.icon}>🏗️</div>
                <h3>Enterprise ERP</h3>
                <p>Consolidate Finance, CRM, HR, and Inventory into a single, secure source of truth.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.icon}>🚀</div>
                <h3>SaaS Architecture</h3>
                <p>Multi-tenant platforms built for scale, performance, and recurring revenue.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.icon}>🔌</div>
                <h3>Automation & APIs</h3>
                <p>Integrate M-Pesa, KRA eTIMS, and third-party tools into your existing workflows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className={styles.featured}>
          <div className="container">
            <div className={styles.featuredCentered}>
              <span className={styles.tag}>Flagship Project</span>
              <h2>Mina ERP: Multi-Tenant Business Engine</h2>
              <p>
                Mina ERP is a high-performance, multi-tenant enterprise resource planning system designed to streamline complex business logic for organizations across Kenya. It ensures complete data isolation and lightning-fast performance, even at scale.
              </p>
              <div className={styles.featureBadges}>
                <span>✓ Real-time Inventory Tracking</span>
                <span>✓ Automated Financial Reporting</span>
                <span>✓ Secure Role-Based Access</span>
              </div>
              <div className={styles.ctaGroupCentered}>
                <a href="https://mina-erp.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">Explore Mina ERP Live →</a>
                <Link href="/portfolio/mina-erp" className={styles.secondaryLink}>Read the Case Study</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section (pSEO Hook) */}
        <section className={styles.tools}>
          <div className="container">
            <div className={styles.toolsBox}>
              <h2>Plan Your Growth</h2>
              <p>Use my free strategic tools to calculate your digital ROI and compliance status.</p>
              <div className={styles.toolLinks}>
                <Link href="/tools/roi-calculator">ERP ROI Calculator</Link>
                <Link href="/tools/etims-checker">eTIMS Compliance Check</Link>
                <Link href="/tools/downtime-cost">Downtime Cost Tool</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
