import styles from './Hero.module.scss';

import heroImg from '../../images/home-bcg-img.png';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <h1 className={styles.heroTitile}>Welcome to Tweets</h1>
      </div>
      <div className={styles.heroWrapper}>
        <img className={styles.heroImg} src={heroImg} alt="heroImg" />
      </div>
    </div>
  );
};

export default Hero;
