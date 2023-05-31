import { lazy, Suspense } from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

import Loader from 'components/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));
const TweetsPage = lazy(() => import('./pages/TweetsPage'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tweets">Tweets</Link>
      </nav>
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
