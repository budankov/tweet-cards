import { ReactComponent as GoIt } from '../../images/Logo.svg';
import CardDecorImage from '../../images/card-pictures-decor.png';

import styles from './TweetsItem.module.scss';

const TweetsItem = ({ id, user, tweets, followers, avatar }) => {
  return (
    <li key={id} className={styles.tweetItem}>
      <GoIt className={styles.tweetItem__icon} />
      <div className={styles.tweetItem__container}>
        <div className={styles.tweetItem__image}>
          <img src={CardDecorImage} alt={user} />
        </div>
        <div className={styles.decorationElement}>
          <div className={styles.decorationElement__line}></div>
          <div className={styles.decorationElement__circle}>
            <img
              className={styles.tweetItem__avatar}
              src={avatar}
              alt="Avatar"
            />
          </div>
        </div>
        <div className={styles.tweetItem__textContiner}>
          <p className={styles.tweetItem__tweets}>Tweets: {tweets}</p>
          <p className={styles.tweetItem__followers}>Followers: {followers}</p>
          <button className={styles.tweetItem__button} type="button">
            <span>Follow</span>
          </button>
        </div>
      </div>
    </li>
  );
};

export default TweetsItem;
