import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { addPetResult } from 'redux/pets/pets-selectors';
import Notiflix from 'notiflix';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export default function SharedLayout() {
  const messageStatus = useSelector(addPetResult);

  useMemo(() => {
    if (messageStatus === 'fulfilled') {
      Notiflix.Notify.success(`Pet added successfully!`);
    }
    if (messageStatus === 'rejected') {
      Notiflix.Notify.failure(`Something went wrong!`);
    }
  }, [messageStatus]);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
