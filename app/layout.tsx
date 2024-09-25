import type { Metadata } from 'next';
import '../styles/globals.css';
import 'aos/dist/aos.css';
import ScrollToTop from '@/components/ui/ScrollToTop';
export const metadata: Metadata = {
  title: 'Positivus',
  description: 'Navigating the digital landscape for success',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
