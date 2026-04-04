import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="container">
        <section className={styles.hero}>
          <h1>Start Your Transformation</h1>
          <p>Let's discuss how we can build the digital foundation your business needs to scale.</p>
        </section>

        <section className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.item}>
              <h3>Location</h3>
              <p>Nairobi, Kenya</p>
              <p>Available for global projects</p>
            </div>
            <div className={styles.item}>
              <h3>Email</h3>
              <p>hello@itindi.com</p>
            </div>
            <div className={styles.item}>
              <h3>Social</h3>
              <div className={styles.socials}>
                <a href="https://linkedin.com/in/michael-itindi-717760190/" target="_blank">LinkedIn</a>
                <a href="https://github.com/michaelitindi" target="_blank">GitHub</a>
              </div>
            </div>
          </div>

          <form className={styles.form}>
            <div className={styles.field}>
              <label>Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            <div className={styles.field}>
              <label>Work Email</label>
              <input type="email" placeholder="john@company.com" required />
            </div>
            <div className={styles.field}>
              <label>How can I help?</label>
              <select>
                <option>Custom ERP Development</option>
                <option>SaaS Platform Build</option>
                <option>Business Automation</option>
                <option>M-Pesa/KRA Integration</option>
                <option>Other</option>
              </select>
            </div>
            <div className={styles.field}>
              <label>Project Details</label>
              <textarea placeholder="Tell me about your business bottlenecks..." rows={5}></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Inquiry</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
