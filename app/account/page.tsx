import ManageSubscriptionButton from './ManageSubscriptionButton';
import {
  getSession,
  getUserDetails,
  getSubscription
} from '@/app/supabase-server';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

export const dynamic = 'force-dynamic';

export default async function Account() {
  const [session, userDetails, subscription] = await Promise.all([
    getSession(),
    getUserDetails(),
    getSubscription()
  ]);

  if (!session) {
    return redirect('/signin');
  }

  const subscriptionPrice =
    subscription &&
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: subscription?.prices?.currency!,
      minimumFractionDigits: 0
    }).format((subscription?.prices?.unit_amount || 0) / 100);


   
    
  return (
    <section className="mb-32 ">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Account
          </h1>
          <p className="max-w-2xl m-auto mt-5 text-xl text-purple-500 sm:text-center sm:text-2xl">
            We partnered with Stripe for a simplified billing.
          </p>
        </div>
      </div>
      <div className="p-4 ">
        <Card
          title="Your Plan"
          description={
            subscription
              ? `You are currently on the ${subscription?.prices?.products?.name} plan which will expire on ${subscription?.current_period_end.slice(0,-15)}. `
              : 'You are not currently subscribed to any plan.'
          }
          footer={<ManageSubscriptionButton session={session} />}
        >
          <div className="mt-2 mb-4 text-2xl font-semibold">
            {subscription ? (
              `${subscriptionPrice}/${subscription?.prices?.interval}`
            ) : (
              <Link href="/">Choose your plan</Link>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}

function Card({ title, description, footer, children }: Props) {
  return (
    <div className="bg-gradient-to-bl from-gray-900 from-10% via-gray-800 via-50% to-gray-900 to-90% w-full max-w-3xl m-auto my-8 border rounded-md p border-gray-700">
      <div className="px-12 py-4">
        <h3 className="mb-1 text-4xl font-medium">{title}</h3>
        <p className="text-gray-300 text-xl">{description}</p>
        {children}
      </div>
      <div className="p-4 border-t rounded-b-md border-gray-700 bg-gray-900 text-purple-400">
        {footer}
      </div>
    </div>
  );
}
