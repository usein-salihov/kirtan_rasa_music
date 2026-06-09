import type { Metadata } from 'next';
import ConnectSection from '@/components/ConnectSection';

export const metadata: Metadata = {
  title: 'Connect — Kirtan Rasa Music',
  description: 'Connect with Kirtan Rasa Music on Spotify, Instagram, and Facebook.',
};

export default function ConnectPage() {
  return <ConnectSection />;
}
