import { memo } from 'react';

import { FormattedText } from './formatting/FormattedText';
import { HeadTitle } from './styles';

export const ErrorMessage = memo(() => (
  <HeadTitle>
    <FormattedText label='error.message.common' />
  </HeadTitle>
));
