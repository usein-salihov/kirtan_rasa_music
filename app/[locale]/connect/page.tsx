import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ConnectSection from '@/components/ConnectSection';


export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'connect' });
  return { title: `${t('pageTitle')} — Kirtan Rasa Music` };
}

export default async function ConnectPage() {
  return <ConnectSection />;
}
