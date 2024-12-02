'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import { VinDecoder } from '@/components/vin-decoder';

export function HomeContent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center space-y-2">
          <Link 
            href="/" 
            className="inline-block hover:opacity-80 transition-opacity"
          >
            <h1 className="text-4xl font-bold tracking-tight">
              Tesla VIN Decoder
            </h1>
          </Link>
          <p className="text-muted-foreground">
            Decode your Tesla Vehicle Identification Number
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <VinDecoder />
        </Suspense>
        <footer className="text-center mt-8 text-sm text-muted-foreground">
          Powered by{" "}
          <a
            href="https://www.apirobots.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            APIRobots
          </a>
        </footer>
      </div>
    </main>
  );
} 