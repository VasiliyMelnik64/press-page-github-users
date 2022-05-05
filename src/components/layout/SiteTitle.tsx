import { useEffect, memo } from 'react';

const title = 'Press Page';

export const SiteTitle = memo(() => {
  useEffect(() => {
    document.title = title;
  }, []);

  return null;
});
