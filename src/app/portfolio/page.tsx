import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./portfolio.module.css";
import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      title: "Mina ERP",
      category: "Enterprise Software",
      description: "A multi-tenant ERP system designed to consolidate finance, inventory, and HR operations into a single source of truth.",
      impact: "Reduced monthly reporting time by 60% for pilot clients.",
      tags: ["Multi-tenant", "Next.js", "Prisma", "Clerk"],
      link: "/portfolio/mina-erp"
    },
    {
      title: "FreelanceMatch",
      category: "Marketplace Platform",
      description: "A high-performance platform connecting specialized service providers with high-intent clients.",
      impact: "Streamlined the hiring process for over 500+ users.",
      tags: ["Marketplace", "Business Automation", "SaaS"],
      link: "/portfolio/freelancematch"
    },
    {
      title: "RepoRaft",
      category: "Content Platform",
      description: "A blazing fast directory-style application built for high-speed content discovery and organization.",
      impact: "100/100 Lighthouse performance score, ensuring zero bounce rate.",
      tags: ["Astro", "Performance", "SEO"],
      link: "/portfolio/reporaft"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="container">
        <section className={styles.hero}>
          <h1>Strategic Case Studies</h1>
          <p>Real-world systems built to solve complex business challenges.</p>
        </section>

        <section className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <span className={styles.category}>{project.category}</span>
                <h2>{project.title}</h2>
              </div>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.impactBox}>
                <strong>Business Impact:</strong>
                <p>{project.impact}</p>
              </div>
              <div className={styles.footer}>
                <div className={styles.tags}>
                  {project.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                </div>
                <Link href={project.link} className={styles.link}>Case Study →</Link>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
