import { createServerSupabaseClient } from '@/app/supabase-server';
import React from "react";
import Header from './Header';
export const dynamic = 'force-dynamic';

export default async function Navbar() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();
  return (
    <Header user={user?.email}/>
    );
}
