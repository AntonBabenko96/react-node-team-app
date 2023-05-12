import { BrowserRouter } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

export const App = () => {
  return (
    <BrowserRouter basename="/react-node-team-app">
      <SharedLayout />
    </BrowserRouter>
  );
};
