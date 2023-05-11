import Header from 'components/Header/Header';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import { Route, Routes } from 'react-router-dom';
import UserPage from 'pages/UserPage/UserPage';



export default function SharedLayout() {
  return (
    <>
      <Header />
      <NoticesSearch/>
      <Routes>
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </>
  );
}