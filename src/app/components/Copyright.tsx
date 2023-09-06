import { Link, Typography } from '@mui/material';
import React from 'react';

const Copyright = (props: any) => {
    return (
        <div>
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
            </Typography>
        </div>
    );
};

export default Copyright;