import type { PriceTier } from "@/lib/tour-pricing";
import { formatPricingTotal } from "@/lib/tour-pricing";

type Props = {
  tiers: PriceTier[];
  currency: string;
  compact?: boolean;
};

export function TourPricingTiersTable({ tiers, currency, compact = false }: Props) {
  const cell = compact ? "px-2.5 py-2 text-xs" : "px-4 py-3.5 text-sm";
  const head = compact ? "px-2.5 py-2.5 text-xs" : "px-4 py-3.5 text-sm";

  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      <table className="w-full">
        <thead>
          <tr className="bg-primary text-primary-foreground">
            <th className={`${head} font-semibold text-center`}>Persons</th>
            <th className={`${head} font-semibold text-center`}>Per person</th>
            <th className={`${head} font-semibold text-center`}>Total</th>
          </tr>
        </thead>
        <tbody>
          {tiers.map((tier, i) => (
            <tr key={tier.persons} className={i % 2 === 0 ? "bg-white" : "bg-background"}>
              <td className={`${cell} text-center font-medium`}>{tier.persons}</td>
              <td className={`${cell} text-center font-semibold`}>
                {tier.price} {currency}
              </td>
              <td className={`${cell} text-center font-semibold`}>
                {formatPricingTotal(tier.persons, tier.price, currency)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
