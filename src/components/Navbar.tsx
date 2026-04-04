import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            Michael Itindi
          </Link>
          <div className={styles.links}>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/tools">Tools</Link>
            <a href={process.env.NEXT_PUBLIC_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">See if you're a good fit</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
