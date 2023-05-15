import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Pagination, Stack, Link } from '@mui/material';

// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import PaginationItem from '@mui/material/PaginationItem';




const BASE_URL = 'http://hn.algolia.com/api/v1/search?';

export default function Paginations() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  useEffect(() => {
    axios.get(BASE_URL + `query=${query}&page=${page}`).then(({ data }) => {
      console.log(data);
      setPosts(data.hits);
      setPageQty(data.nbPages);
    });
  }, [query, page]);

  return (
    <Container>
      <Stack spacing={2}>
        {posts.map(post => (
          <Link key={post.ObjectID} href={post.url}>
            {post.title || post.story_title}
          </Link>
        ))}
        {!!pageQty && (
          <Pagination
            count={5}
            color="primary"
            variant="outlined"
            page={page}
            onChange={(_, num) => setPage(num)}
            sx={{marginX: 'auto', marginY: 3}}
            size="large"
          />
        )}
      </Stack>
    </Container>
  );
}


