import user from '../../users';

import TweetsItem from 'components/TweetsItem/TweetsItem';

import styles from './TweetsList.module.scss';

const TweetsList = () => {
  return (
    <ul className={`${styles.tweetsList}`}>
      {user.map(({ id, ...props }) => (
        <TweetsItem key={id} id={id} {...props} />
      ))}
    </ul>
  );
};

export default TweetsList;
