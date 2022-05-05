import { memo } from 'react';
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';

import { usersLoadingSelector } from '../modules/users/users-slice';

const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme?.colors?.mainBgColor};
  z-index: 1;

  .loader {
    position: absolute;
    top: calc(50% - 4.875rem);
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Loader = memo(() => {
  const areUsersLoading = useSelector(usersLoadingSelector);
  const isVisible = areUsersLoading; // add here other selectors with operator OR ||

  return isVisible ? (
    <Container>
      <CircularProgress className='loader' disableShrink />
    </Container>
  ) : null;
});
