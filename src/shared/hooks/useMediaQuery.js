import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';

const useMediaQuery = query => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;

useMediaQuery.propTypes = {
  query: PropTypes.bool.isRequired,
}

// Приклад використання
// function App() {
//   // You can use any @media property
//   const isDesktop = useMediaQuery('(min-width: 1280px)');
// const isTablet = useMediaQuery('(min-width:768px)');
// const isMobile = useMediaQuery('(min-width: 320px)');

//   return (
//     <div className="App">
//       {isDesktop ? <h1>Desktop</h1> : <h1>Mobile</h1>}
//       <Navbar isDesktop={isDesktop} />
//     </div>
//   );
// }