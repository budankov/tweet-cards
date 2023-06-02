import React, { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

import Button from 'components/Button/Button';
import { ReactComponent as GoIt } from '../../images/Logo.svg';
import CardDecorImage from '../../images/card-pictures-decor.png';

import styles from './TweetsItem.module.scss';

const TweetsItem = ({ id, user, tweets, followers, avatar }) => {
  const [following, setFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(followers);

  useEffect(() => {
    const localStorageKey = `user-${id}`;
    const localStorageData = localStorage.getItem(localStorageKey);

    if (localStorageData) {
      const { following, followerCount } = JSON.parse(localStorageData);
      setFollowing(following);
      setFollowerCount(followerCount);
    } else {
      setFollowerCount(followers);
    }
  }, [id, followers]);

  const handleFollowClick = () => {
    const localStorageKey = `user-${id}`;
    const localStorageData = localStorage.getItem(localStorageKey);

    if (localStorageData) {
      const { following, followerCount } = JSON.parse(localStorageData);
      const updatedFollowing = !following;
      const updatedFollowerCount = updatedFollowing
        ? followerCount + 1
        : followerCount - 1;

      setFollowing(updatedFollowing);
      setFollowerCount(updatedFollowerCount);

      const updatedData = {
        following: updatedFollowing,
        followerCount: updatedFollowerCount,
      };
      localStorage.setItem(localStorageKey, JSON.stringify(updatedData));

      if (updatedFollowing) {
        Notiflix.Notify.success('You are successfully following!');
      } else {
        Notiflix.Notify.info('You have successfully unsubscribed!');
      }
    } else {
      setFollowing(true);
      setFollowerCount(prevCount => prevCount + 1);
      const initialData = { following: true, followerCount: followerCount + 1 };
      localStorage.setItem(localStorageKey, JSON.stringify(initialData));
    }
  };

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
          <p className={styles.tweetItem__followers}>
            Followers: {followerCount.toLocaleString('en-US')}
          </p>
          <Button
            className={`${styles.tweetItem__button} ${
              following ? styles.following : ''
            }`}
            type="button"
            onClick={handleFollowClick}
          >
            {following ? 'Following' : 'Follow'}
          </Button>
        </div>
      </div>
    </li>
  );
};

export default TweetsItem;
