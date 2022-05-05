import { memo } from 'react';
import MUICard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { FormattedText } from './formatting/FormattedText';
import { LazyLoadImage } from './LazyLoadImage';
import { assets } from '../assets';

type Props = {
  id: number;
  title: string;
  avatar: string;
  htmlUrl: string;
  testName: string;
  testDeleteId: string;
  testRedirectId: string;
  onDelete?: () => void;
};

export const Card = memo(
  ({
    id,
    testName,
    testDeleteId,
    testRedirectId,
    title,
    avatar,
    htmlUrl,
    onDelete,
  }: Props) => (
    <MUICard>
      <LazyLoadImage
        placeholderImg={assets.avatarPlaceholder}
        src={avatar}
        title={title}
        alt={title}
        width='100%'
        height='100%'
      />
      <CardContent sx={{ padding: '1rem' }}>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          data-testname={testName}
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', padding: '1rem' }}>
        <Button size='small'>
          <Link
            href={htmlUrl}
            title={title}
            underline='none'
            data-testid={testRedirectId}
          >
            <FormattedText label='users.github.info' />
          </Link>
        </Button>
        {onDelete && (
          <Button
            data-delete-id={id}
            data-testid={testDeleteId}
            size='small'
            variant='contained'
            color='error'
            onClick={onDelete}
          >
            <FormattedText label='users.delete' />
          </Button>
        )}
      </CardActions>
    </MUICard>
  )
);
