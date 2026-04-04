import { Metadata } from 'next';
import ECitizenClient from './ECitizenClient';

export const metadata: Metadata = {
  title: "e-Citizen Fee Calculator Kenya 2026 | Transaction Auditor Tool",
  description: "Calculate and audit your e-Citizen government service fees in 2026. Understand the cumulative impact of convenience fees across all government digital transactions.",
  keywords: ["e-Citizen Fees 2026", "Kenya Government Services", "Digital Payment Audit", "e-Citizen Convenience Fee"],
};

export default function ECitizenPage() {
  return <ECitizenClient />;
}
