import React from 'react';
import { ErrorMessage } from '../../components/ErrorMessage';
import { PageLayout } from '../../components/layout/PageLayout';

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <PageLayout>
          <ErrorMessage />
        </PageLayout>
      );
    }

    return this.props.children;
  }
}
