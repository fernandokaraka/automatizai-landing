import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import ptMessages from './locales/pt.json';
import enMessages from './locales/en.json';

const messages = {
  pt: ptMessages,
  en: enMessages,
};

interface I18nProviderProps {
  children: ReactNode;
  locale: string;
}

export function I18nProvider({ children, locale }: I18nProviderProps) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages[locale as keyof typeof messages]}
    >
      {children}
    </NextIntlClientProvider>
  );
} 