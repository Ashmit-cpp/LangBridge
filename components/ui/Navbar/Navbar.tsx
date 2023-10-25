import Link from 'next/link';
import { createServerSupabaseClient } from '@/app/supabase-server';
import Logo from '@/components/icons/Logo';
import SignOutButton from './SignOutButton';

export const dynamic = 'force-dynamic';

export default async function Navbar() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <nav className="bg-gray-800 drop-shadow-2xl backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="flex flex-row justify-between py-4 md:py-6 items-center">
          <div className="flex items-center flex-1">
            <Link href="/" aria-label="Logo">
              <Logo />
            </Link>
            <nav className="ml-6 space-x-2 lg:block">
              <Link href="/pricing" className="">
                Pricing
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4 lg:space-x-8">
            {user ? (
              <div className="flex items-center">
                <Link href="/account" className="mr-4">
                  Account
                </Link>
                <SignOutButton />
              </div>
            ) : (
              <Link href="/signin" className="mr-1">
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
