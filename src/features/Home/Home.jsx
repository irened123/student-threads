import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectFilteredPosts, setSearchTerm, fetchComments } from '../../store/redditSlice';
import Post from '../Post/Post';
import PostLoading from '../Post/PostLoading';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, error, searchTerm, selectedSubreddit } = useSelector(state => state.reddit);

  useEffect(() => {
  }, []);

  useEffect(() => {
    if (selectedSubreddit) {
      dispatch(fetchPosts(selectedSubreddit));
    }
  }, [selectedSubreddit, dispatch]);

  const handleCommentToggle = useCallback((postId, permalink) => {
    dispatch(fetchComments(postId, permalink));
  }, [dispatch]);

  const handleRetry = () => {
    dispatch(fetchPosts(selectedSubreddit));
  };

  const handleResetSearch = () => {
    dispatch(setSearchTerm(''));
  };

  const renderLoading = () => {
    const loadingItems = Array.from({ length: getRandomNumber(3, 10) }, (_, index) => (
      <PostLoading key={index} />
    ));
    return <div className="post-loading-container">{loadingItems}</div>;
  };

  const renderError = (message) => (
    <div className="error">
      <h2>{message}</h2>
      <button type="button" onClick={handleRetry}>Try again</button>
    </div>
  );

  const renderNoPosts = () => (
    <div className="error">
      <h2>No posts matching "{searchTerm}"</h2>
      <button type="button" onClick={handleResetSearch}>Go home</button>
    </div>
  );

  if (isLoading) {
    return renderLoading();
  }

  if (error) {
    return renderError('Failed to load posts.');
  }

  if (posts.length === 0) {
    return renderNoPosts();
  }

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <Post 
          key={post.id} 
          post={post} 
          onToggleComments={() => handleCommentToggle(post.id, post.permalink)} 
        />
      ))}
    </div>
  );
};

export default Home;


