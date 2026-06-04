import type { Metadata } from 'next';
import MusicSection from '@/components/MusicSection';

export const metadata: Metadata = {
  title: 'Music | Kirtan Rasa Music',
  description: 'Explore the full discography of Kirtan Rasa — five albums of sacred devotional music.',
};

export default function MusicPage() {
  return <MusicSection />;
}
