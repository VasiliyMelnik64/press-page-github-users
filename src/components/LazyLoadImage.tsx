import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';
import { useCallback, useEffect, useState } from 'react';

type Props = {
  src: string;
  placeholderImg?: string;
  errorImg?: string;
  title?: string;
  alt?: string;
  width?: string;
  height?: string;
};

const LoaderSection = styled.div`
  width: 100%;
  height: 100%;
  min-height: 200px;
  position: relative;
  > * {
    position: absolute;
    top: 55%;
    left: 42%;
    transform: translate(-50%, -50%);
  }
`;

export const LazyLoadImage = ({
  src,
  placeholderImg,
  errorImg,
  title,
  ...props
}: Props) => {
  const [loading, setLoading] = useState(true);
  const [imgSrc, setSrc]: [string, (arg: any) => void] = useState(
    placeholderImg || src
  );

  const onLoad = useCallback(() => {
    setLoading(false);
    setSrc(src);
  }, [src]);

  const onError = useCallback(
    () => setSrc(errorImg || placeholderImg),
    [errorImg, placeholderImg]
  );

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.addEventListener('load', onLoad);
    img.addEventListener('error', onError);

    return () => {
      img.removeEventListener('load', onLoad);
      img.removeEventListener('error', onError);
    };
  }, [src, onLoad, onError]);

  return loading ? (
    <LoaderSection>
      <CircularProgress className='loader' disableShrink />
    </LoaderSection>
  ) : (
    <img {...props} alt={imgSrc} src={imgSrc} title={title} />
  );
};
