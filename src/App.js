import { lazy, Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar/AppBar';
import Loader from 'shared/components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));
const TweetsPage = lazy(() => import('./pages/TweetsPage'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" redirectTo="/" element={<HomePage />} />
      </Routes>
      <Outlet />
    </Suspense>
  );
};

export default App;
