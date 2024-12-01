import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { Toaster } from "@/components/ui/toaster";
import { GitHubRibbon } from '@/components/github-ribbon';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tesla VIN Decoder',
  description: 'Decode your Tesla Vehicle Identification Number',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-background antialiased">
            <div className="fixed top-4 left-4">
              <ThemeSwitcher />
            </div>
            <GitHubRibbon />
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}