import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import moment from 'moment';

type PropTypes = {
  title: string;
  author: string;
  created_at: string | number;
};

function IssueCard({ title, author, created_at }: PropTypes) {
  return (
    <Card sx={{ minWidth: 275, my: 3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Title:
        </Typography>
        <Typography variant='h5' component='div'>
          {title}
        </Typography>
        <Typography sx={{ my: 1.5 }} color='text.secondary'>
          {`${author}, ${moment(created_at).format('MM/DD/YYYY')}`}
        </Typography>
      </CardContent>
    </Card>
  );
}

export { IssueCard };
