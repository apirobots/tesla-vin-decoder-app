'use client';

import Link from 'next/link';
import { VinDecoder } from '@/components/vin-decoder';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            Tesla VIN Decoder
          </h1>
          <p className="text-muted-foreground">
            Decode your Tesla Vehicle Identification Number
          </p>
        </div>
        <VinDecoder />
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