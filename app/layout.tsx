import SupabaseProvider from './supabase-provider';
import Navbar from '@/components/ui/Navbar';
import { PropsWithChildren } from 'react';
import 'styles/main.css';

const meta = {
  title: "LangBridge",
  description: "Language Translation App",
  robots: 'follow, index'
};

export const metadata = {
  title: meta.title,
  description: meta.description,
  robots: meta.robots
};

export default function RootLayout({  children}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-gray-900 loading">
        <SupabaseProvider>
          <Navbar />
          <main>
            {children}
          </main>
        </SupabaseProvider>
      </body>
    </html>
  );
}
