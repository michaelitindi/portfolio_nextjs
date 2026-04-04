import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./tools.module.css";

export default function Tools() {
  const tools = [
    {
      title: "Manufacturing OEE Dashboard",
      description: "Measure your factory's true productivity across Availability, Performance, and Quality.",
      link: "/tools/manufacturing-oee",
      icon: "⚙️"
    },
    {
      title: "Transport Trip Profit Tool",
      description: "Calculate net margins per trip factoring in 2026 fuel, per-diems, and Expressway tolls.",
      link: "/tools/trip-profitability",
      icon: "🚛"
    },
    {
      title: "Unit Costing Engine",
      description: "Determine true cost of production per unit including WIP, overheads, and wastage.",
      link: "/tools/unit-costing-engine",
      icon: "📦"
    },
    {
      title: "Vehicle Replacement ROI",
      description: "Decide when to retire an asset by comparing maintenance costs vs. new fleet efficiency.",
      link: "/tools/fleet-replacement-roi",
      icon: "🔄"
    },
    {
      title: "2026 Expense Auditor",
      description: "Under the 'No eTIMS, No Deduction' rule, see how much extra tax you pay by using non-compliant vendors.",
      link: "/tools/expense-auditor",
      icon: "🔍"
    },
    {
      title: "2026 Import Cost Engine",
      description: "Calculate total KRA taxes and EAC Common External Tariff costs using 2026 CIF rates.",
      link: "/tools/import-cost-calculator",
      icon: "🚢"
    },
    {
      title: "Rental Income Optimizer",
      description: "Calculate net rental yield after KRA Monthly Rental Income (MRI) tax and operational costs.",
      link: "/tools/property-roi-calculator",
      icon: "🏠"
    },
    {
      title: "KRA WHT Scheduler",
      description: "Calculate WHT deductions for professional services and track iTax remittance deadlines.",
      link: "/tools/wht-scheduler",
      icon: "📅"
    },
    {
      title: "Effective Interest Tool",
      description: "Decode the true cost of credit. Compare 'Flat Rate' marketing with actual 'Reducing Balance' yields.",
      link: "/tools/effective-interest-calculator",
      icon: "📉"
    },
    {
      title: "Port Delay & Demurrage Tool",
      description: "Estimate hidden costs of Port of Mombasa delays and identify logistics risk exposure.",
      link: "/tools/port-delay-calculator",
      icon: "⚓"
    },
    {
      title: "ERP ROI Calculator",
      description: "Discover how much your business is losing to manual processes and calculate payback period.",
      link: "/tools/roi-calculator",
      icon: "📊"
    },
    {
      title: "eTIMS Readiness Diagnostic",
      description: "A 4-step assessment to determine your KRA compliance gap and integration needs.",
      link: "/tools/etims-diagnostic",
      icon: "📋"
    },
    {
      title: "M-Pesa API Simulator",
      description: "Trigger a mock STK Push and see exactly how your system receives automated payment data.",
      link: "/tools/mpesa-simulator",
      icon: "📲"
    },
    {
      title: "Manual vs. Automated Cost",
      description: "Calculate the 'Hidden Tax' of human error in manual entry and visualize automation savings.",
      link: "/tools/human-error-calculator",
      icon: "⚠️"
    },
    {
      title: "M-Pesa Business Fee Tool",
      description: "Quickly calculate transaction costs for Paybill and Buy Goods for your operations.",
      link: "/tools/mpesa-calculator",
      icon: "💸"
    },
    {
      title: "PAYE & Net Salary Tool",
      description: "Estimate take-home pay based on 2026 regulations (NSSF, SHIF, and Housing Levy).",
      link: "/tools/paye-calculator",
      icon: "🇰🇪"
    },
    {
      title: "Downtime Cost Tool",
      description: "Visualize the hidden financial impact of website downtime on your annual revenue.",
      link: "/tools/downtime-cost",
      icon: "⏱️"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="container">
        <section className={styles.hero}>
          <h1>2026 Strategic Planning Tools</h1>
          <p>The definitive suite of business diagnostics for the modern Kenyan industrial and digital landscape.</p>
        </section>

        <section className={styles.grid}>
          {tools.map((tool, index) => (
            <div key={index} className={styles.toolCard}>
              <div className={styles.icon}>{tool.icon}</div>
              <h2>{tool.title}</h2>
              <p>{tool.description}</p>
              <Link href={tool.link} className="btn-primary">Launch Tool</Link>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
