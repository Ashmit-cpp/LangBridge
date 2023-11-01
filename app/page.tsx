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
    <div>
      <Welcome />
      <div className="bg-gray-800 mx-4 shadow-xl my-2 border-4 border-gray-600 rounded-2xl">
        {subscriptionStatus === "active" ? <PremiumTranslator/> : <Translator/>}
      </div>
    </div>
  );
}
