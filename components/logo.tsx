'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useVinStore } from '@/lib/store';

export function Logo() {
  const router = useRouter();
  const resetVin = useVinStore(state => state.resetVin);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    resetVin();
    router.push('/');
  };

  return (
    <Link 
      href="/" 
      onClick={handleClick}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 
                 font-gotham text-xl font-medium tracking-wider
                 hover:opacity-80 transition-opacity
                 text-tesla-black dark:text-tesla-white"
    >
      TESLA VIN DECODER
    </Link>
  );
} 