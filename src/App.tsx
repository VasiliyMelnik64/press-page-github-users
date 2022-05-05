import { StoreProvider } from './redux/store-provider';
import { Router } from './routes/Router';
import { ErrorBoundary } from './pages/ErrorMessage';
import { ThemeProvider } from './components/layout/ThemeProvider';
import { TranslationsProvider } from './services/translations-service';

export const App = () => (
  <ErrorBoundary>
    <TranslationsProvider>
      <StoreProvider>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </StoreProvider>
    </TranslationsProvider>
  </ErrorBoundary>
);
