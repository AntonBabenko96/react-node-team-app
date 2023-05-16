import { useState, useEffect } from 'react';
import { Container, Pagination, Stack } from '@mui/material';

export default function Paginations({ getPage, count }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPage(page);
  }, [getPage, page]);

  return (
    <Container>
      <Stack spacing={2}>
        <Pagination
          count={count}
          color="primary"
          variant="outlined"
          page={page}
          onChange={(_, num) => setPage(num)}
          sx={{ marginX: 'auto', marginY: 3 }}
          size="large"
        />
      </Stack>
    </Container>
  );
}
