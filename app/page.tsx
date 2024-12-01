import { VinDecoder } from '@/components/vin-decoder';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-2">Tesla VIN Decoder</h1>
        <p className="text-muted-foreground text-center mb-8">
          Enter your Tesla Vehicle Identification Number (VIN) to decode it
        </p>
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