import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../shared/api/tweetsApi';

import TweetsItem from 'components/TweetsItem/TweetsItem';
import styles from './TweetsList.module.scss';

const TweetsList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const fetchedUsers = await getAllUsers();
      setUsers(fetchedUsers);
    };

    fetchAllUsers();
  }, []);

  return (
    <ul className={`${styles.tweetsList}`}>
      {users.map(({ id, ...props }) => (
        <TweetsItem key={id} id={id} {...props} />
      ))}
    </ul>
  );
};

export default TweetsList;
