import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h3>Michael Itindi</h3>
            <p>Building the Operating System for Your Business.</p>
            <p className={styles.location}>Nairobi, Kenya</p>
          </div>
          <div className={styles.links}>
            <div>
              <h4>Solutions</h4>
              <ul>
                <li>ERP Systems</li>
                <li>SaaS Development</li>
                <li>Business Automation</li>
              </ul>
            </div>
            <div>
              <h4>Connect</h4>
              <ul>
                <li><a href="https://linkedin.com/in/michael-itindi-717760190/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/michaelitindi" target="_blank">GitHub</a></li>
                <li><a href="mailto:hello@itindi.com">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Michael Itindi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
