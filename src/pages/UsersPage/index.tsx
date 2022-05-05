import { memo } from 'react';
import styled from 'styled-components';
import { PageLayout } from '../../components/layout/PageLayout';
import { Card } from '../../components/Card';

import { useUsersData } from '../../hooks/useUsersData';
import { User } from '../../services/types';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 3rem;
  padding-top: 1rem;
  padding-bottom: 2rem;

  @media (max-width: 1220px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const UsersPage = memo(() => {
  const { users, onDeleteUser } = useUsersData();

  return (
    <PageLayout>
      <Container>
        {users.map(
          ({ id, login, avatarUrl, htmlUrl }: User & { id: number }) => (
            <Card
              id={id}
              key={id}
              title={login}
              htmlUrl={htmlUrl}
              avatar={avatarUrl}
              onDelete={onDeleteUser(id)}
              testName={`user-name-${login}`}
              testDeleteId={`user-card-delete-${login}`}
              testRedirectId={`user-card-redirect-${login}`}
            />
          )
        )}
      </Container>
    </PageLayout>
  );
});
