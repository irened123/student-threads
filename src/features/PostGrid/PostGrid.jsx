import React from 'react';
import { useSelector } from 'react-redux';
import './PostGrid.css';
import Post from '../Post/Post';
import { selectFilteredPosts, selectSelectedSubreddit, selectError } from '../../store/redditSlice';

const PostGrid = () => {
    // Use useSelector to get the necessary data from Redux store
    const posts = useSelector(selectFilteredPosts);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);
    const error = useSelector(selectError); // Get the error state from the Redux store
    
    if (!selectedSubreddit) {
        return null; // Don't render anything if no subreddit is selected
    }

    if (error) {
        return <div className="error-message">Unable to load posts due to rate limits. Please try again later.</div>;
    }

    return (
        <div className="post-grid-container">
            {posts.map((post, index) => (
                <Post 
                    key={index}
                    post={post}
                />
            ))}
        </div>
    );
};

export default PostGrid;
