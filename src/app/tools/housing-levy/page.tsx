import { Metadata } from 'next';
import HousingLevyClient from './HousingLevyClient';

export const metadata: Metadata = {
  title: "Housing Levy Calculator Kenya 2026 | Affordable Housing Eligibility",
  description: "Calculate your mandatory 3% Affordable Housing Levy contributions under 2026 KRA regulations and check your eligibility for the Boma Yangu housing scheme.",
  keywords: ["Housing Levy Kenya 2026", "KRA Housing Levy Calculator", "Boma Yangu Eligibility", "Kenya Affordable Housing Deduction"],
};

export default function HousingLevyPage() {
  return <HousingLevyClient />;
}
