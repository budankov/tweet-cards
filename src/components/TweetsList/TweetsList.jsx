import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../shared/api/tweetsApi';

import TweetsItem from 'components/TweetsItem/TweetsItem';
import styles from './TweetsList.module.scss';

const TweetsList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tweetsPerPage] = useState(3);
  const [displayedTweets, setDisplayedTweets] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const fetchedUsers = await getAllUsers();
      setUsers(fetchedUsers);
    };

    fetchAllUsers();
  }, []);

  useEffect(() => {
    const lastIndex = currentPage * tweetsPerPage;
    const updatedTweets = users.slice(0, lastIndex);
    setDisplayedTweets(updatedTweets);
  }, [users, currentPage, tweetsPerPage]);

  const handleLoadMoreClick = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <ul className={`${styles.tweetsList}`}>
        {displayedTweets.map(({ id, ...props }) => (
          <TweetsItem key={id} id={id} {...props} />
        ))}
      </ul>
      {users.length > displayedTweets.length && (
        <button className={styles.loadMoreButton} onClick={handleLoadMoreClick}>
          Load More
        </button>
      )}
    </div>
  );
};

export default TweetsList;
