import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  // Base routes
  const routes = [
    '', 
    '/services', 
    '/portfolio', 
    '/tools', 
    '/contact', 
    '/tools/roi-calculator', 
    '/tools/etims-diagnostic',
    '/tools/mpesa-calculator',
    '/tools/paye-calculator',
    '/tools/downtime-cost',
    '/tools/mpesa-simulator',
    '/tools/human-error-calculator',
    '/tools/expense-auditor',
    '/tools/import-cost-calculator',
    '/tools/property-roi-calculator',
    '/tools/port-delay-calculator',
    '/tools/effective-interest-calculator',
    '/tools/wht-scheduler',
    '/tools/manufacturing-oee',
    '/tools/trip-profitability',
    '/tools/unit-costing-engine',
    '/tools/fleet-replacement-roi'
  ].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  );

  return routes;
}
