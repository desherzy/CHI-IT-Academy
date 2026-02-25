'use client';

import { Container, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

export default function HomePage() {
  return(
    <Container maxWidth='sm'>
      <Box sx={{ mt: 10, textAlign: 'center' }}>
        <Typography variant='h2' component='h1' gutterBottom fontWeight='bold'>
          Welcome to the Home Page!
        </Typography>
        <Typography variant='h5' color='text' paragraph>
          There might be a description of the application that Welcoming you.
        </Typography>
        <Typography variant='h5' color='text.secondary' paragraph>
          But if you there, I think you know already know what must be there 0.o
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button variant='contained'
            size='large'
            component={Link} 
            href='/posts'
          >
            View Posts
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

