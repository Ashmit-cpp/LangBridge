'use client';

import { useSupabase } from '@/app/supabase-provider';
import { useRouter } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function SignOutButton() {
  const router = useRouter();
  const { supabase } = useSupabase();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };
  return (
    <button
      className="font-medium text-gray-200 hover:text-purple-600 px-4 py-3 flex items-center transition duration-150 ease-in-out"
      onClick={handleSignOut}
    >
      Sign out
    </button>
  );
}
