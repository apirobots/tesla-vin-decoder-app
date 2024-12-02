import { HomeContent } from '@/components/home-content';
import { Metadata } from 'next';
import { generateMetadata as generateSocialMetadata } from '@/lib/utils/metadata';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: { vin: string };
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  return generateSocialMetadata(params.vin);
}

export default function VinPage({ params }: PageProps) {
  return <HomeContent />;
} 