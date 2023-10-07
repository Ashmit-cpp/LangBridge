import SupabaseProvider from './supabase-provider';
import Navbar from '@/components/ui/Navbar';
import { PropsWithChildren } from 'react';
import 'styles/main.css';

const meta = {
  title: "LangBridge",
  description: "Language Translation App",
  robots: 'follow, index',
  type: 'website'
};

export const metadata = {
  title: meta.title,
  description: meta.description,
  robots: meta.robots,
  type: meta.type,
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-gray-900 loading">
        <SupabaseProvider>
          {/* @ts-expect-error */}
          <Navbar />
          <main>
            {children}
          </main>
        </SupabaseProvider>
      </body>
    </html>
  );
}
