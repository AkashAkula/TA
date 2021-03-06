import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Profile from './Profile';
import Tabs from '@mui/material/Tabs';


import Posts from './Posts';

export default function Home() {
  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Tabs aria-label="nav tabs example">
      <Button color="inherit" href=''>Home</Button>
      <Button color="inherit" href='login'>Login</Button>
          <Button color="inherit" href='signup'>Sign Up</Button>
      </Tabs>
    </Box>
          
    <Profile/>
    <h3>Recent Posts</h3>
    <Posts/><br/>
    <Posts/><br/>
    <Posts/>
    </>
  );
}