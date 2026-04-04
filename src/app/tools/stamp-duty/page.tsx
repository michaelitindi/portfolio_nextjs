import { Metadata } from 'next';
import StampDutyClient from './StampDutyClient';

export const metadata: Metadata = {
  title: "Kenya Stamp Duty Calculator 2026 | Land Transfer & Legal Fees",
  description: "Calculate stamp duty, legal fees, and valuation costs for property transfers in Kenya. Based on 2026 urban (4%) and rural rates for land and houses.",
  keywords: ["Stamp Duty Kenya 2026", "Land Transfer Fees", "Property Tax Kenya", "KRA Stamp Duty Calculator"],
};

export default function StampDutyPage() {
  return <StampDutyClient />;
}
