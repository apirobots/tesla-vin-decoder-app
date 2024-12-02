import { Metadata } from 'next';
import { generateMetadata as generateSocialMetadata } from '@/lib/utils/metadata';
import { HomeContent } from '@/components/home-content';

interface PageProps {
  searchParams: { vin?: string };
}

export async function generateMetadata(
  { searchParams }: PageProps
): Promise<Metadata> {
  return generateSocialMetadata(searchParams.vin);
}

export default function Home({ searchParams }: PageProps) {
  return <HomeContent />;
}