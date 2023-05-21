import { Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';
import Loader from 'shared/Loder/Loader';
// import UserPage from 'pages/UserPage/UserPage';
// import AddPetPage from 'pages/AddPetPage/AddPetPage';
// import LoginPage from 'pages/LoginPage/LoginPage';
// import MainPage from 'pages/MainPage/MainPage';
// import NewsPage from 'pages/NewsPage/NewsPage';
// import NotFound from 'pages/NotFound/NotFound';
// import NoticesPage from 'pages/NoticesPage/NoticesPage';
// import OurFriendsPage from 'pages/OurFriendsPage/OurFriendsPage';
// import RegisterPage from 'pages/RegisterPage/RegisterPage';
// import SharedLayout from 'components/SharedLayout/SharedLayout';
// import PrivateRoute from 'shared/privateRoute/privateRoute';

const UserPage = lazy(() => import('pages/UserPage/UserPage'));
const AddPetPage = lazy(() => import('pages/AddPetPage/AddPetPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() =>
  import('pages/OurFriendsPage/OurFriendsPage')
);
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));

export default function UserRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          {/* <Route element={<PrivateRoute redirect="/login" />}> */}
          <Route path="user" element={<UserPage />} />
          <Route path="add-pet" element={<AddPetPage />} />
          {/* </Route> */}
          <Route path="login" element={<LoginPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="notices/" element={<NoticesPage />} />
          <Route path="friends" element={<OurFriendsPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
