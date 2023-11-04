'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRef } from 'react';
import Button from '@/components/ui/Button';
import { Database } from '@/types_db';
import { postData } from '@/utils/helpers';
import { getStripe } from '@/utils/stripe-client';
import { Session, User } from '@supabase/supabase-js';
import cn from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const dynamic = 'force-dynamic';

type Subscription = Database['public']['Tables']['subscriptions']['Row'];
type Product = Database['public']['Tables']['products']['Row'];
type Price = Database['public']['Tables']['prices']['Row'];
interface ProductWithPrices extends Product {
  prices: Price[];
}
interface PriceWithProduct extends Price {
  products: Product | null;
}
interface SubscriptionWithProduct extends Subscription {
  prices: PriceWithProduct | null;
}

interface Props {
  session: Session | null;
  user: User | null | undefined;
  products: ProductWithPrices[];
  subscription: SubscriptionWithProduct | null;
}

type BillingInterval = 'lifetime' | 'year' | 'month';

export default function Pricing({
  session,
  user,
  products,
  subscription
}: Props) {
  const intervals = Array.from(
    new Set(
      products.flatMap((product) =>
        product?.prices?.map((price) => price?.interval)
      )
    )
  );
  const router = useRouter();
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>('month');
  const [priceIdLoading, setPriceIdLoading] = useState<string>();

  const handleCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);
    if (!user) {
      return router.push('/signin');
    }
    if (subscription) {
      return router.push('/account');
    }
    try {
      const { sessionId } = await postData({
        url: '/api/create-checkout-session',
        data: { price }
      });

      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      return alert((error as Error)?.message);
    } finally {
      setPriceIdLoading(undefined);
    }
  };

  const targetContainerRef =  useRef<HTMLDivElement>(null);
  const scrollToContainer = () => {
    targetContainerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
    <section className="bg-gray-900 w-full body-font">
      <div className="max-w-6xl px-4 py-2 mx-auto sm:py-4 sm:px-6 lg:px-2">
        <div className="mt-10 sm:flex sm:flex-col sm:align-center">
          <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center p-2">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
              Upgrade your Translation
              </h1>
              <p className="mb-8 leading-relaxed text-xl">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
              <div className="flex justify-center">
                <button onClick={scrollToContainer} className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                  Get Started
                </button>
              </div>
            
            </div>
            <div className="flex items-center justify-center">
              <div className="p-2 lg:max-w-lg lg:w-full md:w-1/2 w-1/2">
                <Image
                  className="object-center rounded"
                  src="/icon.png"
                  alt="hero"
                  width={256}
                  height={256}
                />
              </div>
            </div>
          </div>
          <h1 className="p-2 mt-12 text-3xl font-bold text-white sm:text-center sm:text-6xl" ref={targetContainerRef}>
              Pricing Plans
            </h1>
          <div className="relative self-center bg-gray-700 rounded-lg p-0.5 flex sm:mt-8 border border-zinc-800">
            {intervals.includes('month') && (
              <button
                onClick={() => setBillingInterval('month')}
                type="button"
                className={`${
                  billingInterval === 'month'
                    ? 'relative w-1/2 bg-gray-900 border-zinc-800 shadow-sm text-white'
                    : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-400'
                } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap sm:w-auto sm:px-8`}
              >
                Monthly billing
              </button>
            )}
            {intervals.includes('year') && (
              <button
                onClick={() => setBillingInterval('year')}
                type="button"
                className={`${
                  billingInterval === 'year'
                    ? 'relative w-1/2 bg-gray-900 border-zinc-800 shadow-sm text-white'
                    : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-400'
                } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap sm:w-auto sm:px-8`}
              >
                Yearly billing
              </button>
            )}
          </div>
        </div>
        <p className="max-w-2xl m-auto mt-3 text-xl text-purple-500 sm:text-center sm:text-2xl">
          {!session
            ? 'Please sign in to choose a plan'
            : 'You can select from the following plans:'}
        </p>

        <div className="mb-6 mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {products.map((product) => {
            const price = product?.prices?.find(
              (price) => price.interval === billingInterval
            );
            if (!price) return null;
            const priceString = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: price.currency!,
              minimumFractionDigits: 0
            }).format((price?.unit_amount || 0) / 100);
            return (
              <div
                key={product.id}
                className={cn(
                  'rounded-lg shadow-sm bg-gray-800',
                  'flex flex-col h-full'
                )}
              >
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-2xl font-semibold leading-6 text-purple-500">
                      {product.name}
                    </h2>
                    <p className="mt-3 text-zinc-300">{product.description}</p>
                  </div>

                  <div>
                    <p className="mt-5">
                      <span className="text-5xl font-extrabold white">
                        {priceString}
                      </span>
                      <span className="text-base font-medium text-zinc-100">
                        /{billingInterval}
                      </span>
                    </p>
                    <div>
                      <Button
                        variant="slim"
                        type="button"
                        disabled={!session}
                        loading={priceIdLoading === price.id}
                        onClick={() => handleCheckout(price)}
                        className="block w-full py-2 mt-6 text-sm font-semibold text-center text-white rounded-md hover:bg-gray-900"
                      >
                        {subscription ? 'Manage' : 'Subscribe'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
