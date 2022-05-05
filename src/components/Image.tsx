import { memo } from 'react';

type Props = {
  src: string;
  altText?: string;
  width?: string;
  height?: string;
};

export const Image = memo(
  ({ src, width, height = '40', altText = 'image' }: Props) => (
    <div>
      <img src={src} width={width} height={height} alt={altText} />
    </div>
  )
);
