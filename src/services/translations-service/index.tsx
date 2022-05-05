import { IntlProvider } from 'react-intl';

import enConfig from './locales/en.json';
import nlConfig from './locales/nl.json';

type TranslationsType = {
  [key: string]: any;
};

const messages: TranslationsType = {
  en: enConfig,
  nl: nlConfig,
};

const language = window.navigator.language.split(/[-_]/)[0];

type Props = {
  children: React.ReactNode;
};

export const TranslationsProvider = ({ children }: Props) => (
  <IntlProvider locale={language} messages={messages[language] || enConfig}>
    {children}
  </IntlProvider>
);
