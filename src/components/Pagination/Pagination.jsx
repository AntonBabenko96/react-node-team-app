import { useState, useEffect } from 'react';
import {
  Container,
  Pagination,
  Stack,
  createTheme,
  ThemeProvider,
} from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default function Paginations({ getPage, count }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPage(page);
  }, [getPage, page]);

  return (
    <Container>
      <Stack spacing={2}>
        <ThemeProvider theme={theme}>
          <Pagination
            sx={{
              marginBottom: '192px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              '@media (max-width: 767px)': {
                marginBottom: '50px',
                '& .MuiPagination-ul': {
                  '& > *:not(:first-child):not(:last-child)': {
                    display: 'none',
                  },
                },
              },

              color: '#ff0000',
              marginX: 'auto',
              borderRadius: '45px',
              boxShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
              padding: '9px 12px 9px 12px',
            }}
            count={count}
            color="primary"
            page={page}
            onChange={(_, num) => setPage(num)}
            size="large"
          />
        </ThemeProvider>
      </Stack>
    </Container>
  );
}

// '@media (min-width: 600px)': {
//   width: '444px', // Розмір для планшетів та десктопів
// },
