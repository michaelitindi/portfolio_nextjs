import { Metadata } from 'next';
import CryptoTaxClient from './CryptoTaxClient';

export const metadata: Metadata = {
  title: "Kenya Crypto Tax Calculator 2026 | Digital Asset Excise & KRA Compliance",
  description: "Estimate your KRA tax liability for digital assets in 2026. Includes 10% platform excise and 3% Digital Asset Tax (DAT) calculations for crypto traders in Kenya.",
  keywords: ["Kenya Crypto Tax 2026", "Digital Asset Tax Kenya", "KRA Crypto Regulations", "Bitcoin Tax Calculator Kenya"],
};

export default function CryptoTaxPage() {
  return <CryptoTaxClient />;
}
