import { Metadata } from 'next';
import RemoteTaxClient from './RemoteTaxClient';

export const metadata: Metadata = {
  title: "Remote Work Tax Calculator Kenya 2026 | US/UK to KES Compliance",
  description: "Calculate your KRA tax liability for remote work income in 2026. Convert USD/GBP to KES and estimate PAYE, SHIF, and Housing Levy for digital nomads and remote contractors.",
  keywords: ["Remote Tax Kenya 2026", "Digital Nomad Tax Kenya", "Remote Work Compliance", "KRA Tax Calculator"],
};

export default function RemoteTaxPage() {
  return <RemoteTaxClient />;
}
