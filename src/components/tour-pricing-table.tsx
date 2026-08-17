import type { TourPricing } from "@/lib/tour-pricing";
import { formatPricingTotal } from "@/lib/tour-pricing";
import { TourPricingTiersTable } from "@/components/tour-pricing-tiers-table";
import { SITE_EMAIL, SITE_MAILTO } from "@/lib/site-contact";

type Props = {
  pricing: TourPricing;
  currency: string;
};

export function TourPricingTable({ pricing, currency }: Props) {
  const email = pricing.contactEmail ?? SITE_EMAIL;

  return (
    <section className="mt-14">
      <h2 className="font-display text-2xl sm:text-3xl font-semibold">Prices</h2>

      <div className="mt-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <div>
          <p className="text-center font-semibold text-foreground mb-4">{pricing.label}</p>
          <TourPricingTiersTable tiers={pricing.tiers} currency={currency} />
          <p className="mt-3 text-xs text-muted-foreground text-center">
            Per person · total price for the whole group
          </p>
        </div>

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            All prices are expressed in euro. The per-person rate depends on group size; the total
            column shows the full price for your private group.
          </p>
          <p>
            If you organize a trip for more persons than indicated in the price list, please feel
            free to contact us at{" "}
            <a href={SITE_MAILTO} className="text-primary font-medium hover:underline">
              {email}
            </a>{" "}
            so we can make an offer that fits your needs.
          </p>
        </div>
      </div>
    </section>
  );
}
