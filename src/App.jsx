import SharedLayout from './components/SharedLayout/SharedLayout';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <BrowserRouter basename="/react-node-team-app">
        <SharedLayout />
      </BrowserRouter>
    </>
  );
};
