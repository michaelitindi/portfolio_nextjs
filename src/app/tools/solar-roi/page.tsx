import { Metadata } from 'next';
import SolarROIClient from './SolarROIClient';

export const metadata: Metadata = {
  title: "Solar ROI Calculator Kenya 2026 | KPLC Bill Comparison Tool",
  description: "Calculate the return on investment for solar installation in Kenya. Compare your monthly KPLC bill with solar payback periods using 2026 energy rates.",
  keywords: ["Solar ROI Kenya 2026", "Solar Panel Cost Kenya", "KPLC Bill Calculator", "Renewable Energy Kenya"],
};

export default function SolarROIPage() {
  return <SolarROIClient />;
}
