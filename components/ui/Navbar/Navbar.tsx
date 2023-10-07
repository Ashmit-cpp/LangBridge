import Link from 'next/link';
import { createServerSupabaseClient } from '@/app/supabase-server';
import Logo from '@/components/icons/Logo';
import SignOutButton from './SignOutButton';
export const dynamic = 'force-dynamic'

export default async function Navbar() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <nav className="bg-gray-800">
<div className="max-w-6xl px-1 mx-auto">
  <div className="flex flex-row justify-between py-4 align-center md:py-6">
    <div className="flex items-center flex-1">
      <Link href="/" className="" aria-label="Logo">
        <Logo />
      </Link>
      <nav className="hidden ml-6 space-x-2 lg:block">
        <Link href="/pricing" className="">
          Pricing
        </Link>
      </nav>
    </div>
    <div className="flex items-center ml-7 space-x-8"> 
      {user ? (
        <div className="flex items-center"> 
          <Link href="/account" className="mx-8">
            Account
          </Link>
          <SignOutButton />
        </div>
      ) : (
        <Link href="/signin" className="">
          Sign in
        </Link>
      )}
    </div>
  </div>
</div>

    </nav>
  );
}
