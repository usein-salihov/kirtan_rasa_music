import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'bg' }];
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <Nav />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
