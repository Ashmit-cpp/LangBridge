import Translator from "@/components/Translator";
import PremiumTranslator from "@/components/PremiumTranslator";
import Welcome from "@/components/ui/welcome";
import { getSubscription } from '@/app/supabase-server';
export const dynamic = 'force-dynamic';

export default async function Home() {
  const getsub = async () => {
    const [subscription] = await Promise.all([getSubscription()]);
    console.log(subscription?.status);
    return subscription?.status;
  }
  const subscriptionStatus = await  getsub();
  return (
    <div className="bg-gradient-to-r from-gray-900 from-10% via-gray-800 via-50% to-gray-900 to-90%">
      <Welcome />
      <div className="bg-gray-800 mx-10 shadow-xl my-2 border-4 border-gray-600 rounded-2xl mb-4">
        {subscriptionStatus === "active" ? <PremiumTranslator/> : <Translator/>}
      </div>
    </div>
  );
}
