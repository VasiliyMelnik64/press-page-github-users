import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const SemiBold = styled.b`
  font-weight: ${(props) => props.theme?.text?.weight?.semiBold};
`;

const Underlined = styled.b`
  text-decoration: underline;
`;

const CapitilizedBold = styled.b`
  text-transform: capitalize;
`;

const defaultFormatters = {
  b: (...chunks: any) => <b>{React.Children.toArray(chunks)}</b>,
  capb: (...chunks: any) => (
    <CapitilizedBold>{React.Children.toArray(chunks)}</CapitilizedBold>
  ),
  sb: (...chunks: any) => <SemiBold>{React.Children.toArray(chunks)}</SemiBold>,
  em: (...chunks: any) => <em>{React.Children.toArray(chunks)}</em>,
  un: (...chunks: any) => (
    <Underlined>{React.Children.toArray(chunks)}</Underlined>
  ),
};

type FormattedTextProps = {
  label?: string;
  values?: Record<string, any>;
  children?: any;
  testId?: string;
  privateData?: boolean;
};

export const FormattedText = ({
  label,
  values,
  children,
  testId,
}: FormattedTextProps) => {
  if (!label) {
    return null;
  }

  return (
    <FormattedMessage
      id={label}
      data-testid={testId}
      defaultMessage={label}
      values={{ ...values, ...defaultFormatters }}
    >
      {children}
    </FormattedMessage>
  );
};
