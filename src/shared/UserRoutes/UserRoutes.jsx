import { Route, Routes } from 'react-router';
import UserPage from 'pages/UserPage/UserPage';
import AddPetPage from 'pages/AddPetPage/AddPetPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import MainPage from 'pages/MainPage/MainPage';
import NewsPage from 'pages/NewsPage/NewsPage';
import NotFound from 'pages/NotFound/NotFound';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import OurFriendsPage from 'pages/OurFriendsPage/OurFriendsPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import SharedLayout from 'components/SharedLayout/SharedLayout';

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="add-pet" element={<AddPetPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="notices/:categoryName" element={<NoticesPage />} />
        <Route path="friends" element={<OurFriendsPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
