import { Metadata } from 'next';
import SaccoBankClient from './SaccoBankClient';

export const metadata: Metadata = {
  title: "Sacco vs Bank Loan Calculator Kenya 2026 | Cost of Credit Comparison",
  description: "Compare the true cost of credit between Kenyan Saccos and Commercial Banks in 2026. Calculate monthly repayments and total interest for both options.",
  keywords: ["Sacco vs Bank Kenya", "Loan Calculator Kenya", "Cost of Credit 2026", "Sacco Dividends vs Interest"],
};

export default function SaccoBankPage() {
  return <SaccoBankClient />;
}
