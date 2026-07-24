import type { Metadata } from 'next';
import { APP_CONFIG } from '@airbnb/constants';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: APP_CONFIG.NAME,
  description: APP_CONFIG.DESCRIPTION,
  metadataBase: new URL('http://localhost:3000'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={APP_CONFIG.LANGUAGE}>
      <body className="antialiased">
        <main className="min-h-screen bg-white">{children}</main>
      </body>
    </html>
  );
}
