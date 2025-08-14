import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useTranslations } from 'next-intl';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  currentLocale: string;
  onLocaleChange: (locale: string) => void;
}

export function LanguageToggle({ currentLocale, onLocaleChange }: LanguageToggleProps) {
  const t = useTranslations('common');

  return (
    <Select value={currentLocale} onValueChange={onLocaleChange}>
      <SelectTrigger className="w-[140px] bg-background">
        <SelectValue>
          <span className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span>{currentLocale === 'pt' ? t('portuguese') : t('english')}</span>
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="pt" className="cursor-pointer">
          <span className="flex items-center gap-2">
            {t('portuguese')}
          </span>
        </SelectItem>
        <SelectItem value="en" className="cursor-pointer">
          <span className="flex items-center gap-2">
            {t('english')}
          </span>
        </SelectItem>
      </SelectContent>
    </Select>
  );
} 