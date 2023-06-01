import user from '../../users';

import TweetsItem from 'components/TweetsItem/TweetsItem';

import styles from './TweetsList.module.scss';

const TweetsList = () => {
  return (
    <div className={styles.tweetsListContainer}>
      <ul className={`${styles.tweetsList}`}>
        {user.map(({ id, ...props }) => (
          <TweetsItem key={id} id={id} {...props} />
        ))}
      </ul>
    </div>
  );
};

export default TweetsList;
