// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import AosProvider from '@/components/AosProvider';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SecurityBlocker from './SecurityBlocker';


const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Capital Gate',
  description: 'صفحة بتجربة AOS + الخطوط',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={inter.className}>
        {/* <SecurityBlocker /> */}
        <AosProvider />
        {children}
      </body>
    </html>
  );
}
