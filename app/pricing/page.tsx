import Pricing from '@/components/Pricing';
import {
  getSession,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';
export const dynamic = 'force-dynamic'

export default async function PricingPage() {
  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  return (
    <div className="m-2 mt-0">
    <Pricing
        session={session}
        user={session?.user}
        products={products}
        subscription={subscription}
      />
    </div>
 
  );
}
