import { Link } from 'react-router-dom';

const AppBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/tweets">Tweets</Link>
    </nav>
  );
};

export default AppBar;
