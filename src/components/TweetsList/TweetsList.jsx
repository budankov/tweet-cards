import React, { useEffect, useState } from 'react';
import Notiflix from 'notiflix';

import { getAllUsers } from '../shared/api/tweetsApi';
import TweetsItem from 'components/TweetsItem/TweetsItem';
import Button from 'components/Button/Button';

import styles from './TweetsList.module.scss';

const TweetsList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tweetsPerPage] = useState(3);
  const [displayedTweets, setDisplayedTweets] = useState([]);
  const [isLoadMoreClicked, setIsLoadMoreClicked] = useState(false);

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

    if (isLoadMoreClicked && updatedTweets.length > 0) {
      Notiflix.Notify.info(`Loaded ${updatedTweets.length} cards.`);
      setIsLoadMoreClicked(false);
    }
  }, [users, currentPage, tweetsPerPage, isLoadMoreClicked]);

  const handleLoadMoreClick = () => {
    setCurrentPage(prevPage => prevPage + 1);
    setIsLoadMoreClicked(true);
  };

  return (
    <div>
      <ul className={`${styles.tweetsList}`}>
        {displayedTweets.map(({ id, ...props }) => (
          <TweetsItem key={id} id={id} {...props} />
        ))}
      </ul>
      {users.length > displayedTweets.length && (
        <Button onClick={handleLoadMoreClick}>Load More</Button>
      )}
    </div>
  );
};

export default TweetsList;
