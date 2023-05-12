import { Route, Routes } from 'react-router';
import Header from 'components/Header/Header';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import UserPage from 'pages/UserPage/UserPage';


import AddPetPage from 'pages/AddPetPage/AddPetPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import MainPage from 'pages/MainPage/MainPage';
import NewsPage from 'pages/NewsPage/NewsPage';
import NotFound from 'pages/NotFound/NotFound';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import OurFriendsPage from 'pages/OurFriendsPage/OurFriendsPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';


export default function SharedLayout() {
  return (
    <>
      <Header />
      <NoticesSearch />
      <Routes>
        <Route path="/user" element={<UserPage />} />
        <Route path="/add-pet" element={<AddPetPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/notices/:categoryName" element={<NoticesPage />}>
          <Route path="/sell" />
          <Route path="/lost-found" />
          <Route path="/for-free" />
          <Route path="/favotite" />
          <Route path="/own" />
        </Route>
        <Route path="/friends" element={<OurFriendsPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}
