import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function Variants() {
  return (
    <div>
      <Skeleton animation="wave" variant="rect" width={450} height={120} />
    </div>
  );
}