import { Link } from 'react-router-dom';

import './AppBar.module.scss';

const AppBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/tweets">Tweets</Link>
    </nav>
  );
};

export default AppBar;
