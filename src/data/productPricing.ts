export type ProductPlanId = 'weekly' | 'monthly' | 'lifetime' | 'onetime';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  priceUsd: number;
  priceNote: string;
  popular?: boolean;
}

/** Levo FC 27 plans (https://levocheats.com/go/UROOJ?to=%2Ffc-27-cheats) */
const cheatAccessPlans: ProductPlan[] = [
  { id: 'weekly', label: '1 Week', priceUsd: 15, priceNote: '7 days of access' },
  { id: 'monthly', label: '1 Month', priceUsd: 35, priceNote: '30 days of access', popular: true },
  { id: 'lifetime', label: 'Lifetime', priceUsd: 150, priceNote: 'Unlimited access' },
];

const hwidPlans: ProductPlan[] = [
  { id: 'weekly', label: '1 Week', priceUsd: 15, priceNote: '7 days of access' },
  { id: 'monthly', label: '1 Month', priceUsd: 35, priceNote: '30 days of access', popular: true },
];

const ugcPlans: ProductPlan[] = [
  { id: 'onetime', label: 'One-time access', priceUsd: 50, priceNote: 'USD · one-time' },
];

export function getProductPlans(productSlug: string): ProductPlan[] {
  if (productSlug === 'ugc') return ugcPlans;
  if (productSlug === 'hwid-spoofer') return hwidPlans;
  return cheatAccessPlans;
}

export function getDefaultPlan(plans: ProductPlan[]): ProductPlan {
  return plans.find((p) => p.popular) ?? plans[0]!;
}

export function formatPlanPrice(usd: number): string {
  return `$${usd.toFixed(2)}`;
}

export function checkoutUrlWithPlan(baseUrl: string, planId: ProductPlanId): string {
  if (baseUrl.includes('levocheats.com')) {
    return baseUrl;
  }
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}plan=${planId}`;
}
