import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';
import styles from './AppBar.module.scss';

const AppBar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Закриваємо бургер-меню
  };

  useEffect(() => {
    closeMenu(); // Закриваємо бургер-меню при зміні шляху маршруту
  }, [location.pathname]);

  return (
    <nav className={styles.nav__container}>
      <div className={styles.menu__icon}>
        <Hamburger toggled={menuOpen} toggle={handleToggleMenu} />
      </div>
      {menuOpen && (
        <div className={styles.overlay} onClick={handleToggleMenu} />
      )}
      <ul className={`${styles.nav__list} ${menuOpen ? styles.open : ''}`}>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} to="/tweets" onClick={closeMenu}>
            Tweets
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AppBar;
