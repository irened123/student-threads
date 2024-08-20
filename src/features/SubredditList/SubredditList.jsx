import React from 'react';
import './SubredditList.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubreddits } from '../../store/subRedditSlice';
import { setSelectedSubreddit, fetchPosts, selectError } from '../../store/redditSlice';

const SubredditList = () => {  // Receive setSelectedSubreddit as a prop
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddit = useSelector(state => state.reddit.selectedSubreddit);
    const error= useSelector(selectError); 

    if (error) {
        return <div className="error-message">Unable to load subreddit due to rate limits. Please try again later.</div>;
    }

    return (
        <div className="subreddit-list-container">
            {subreddits.map((subreddit) => (
                <button 
                    key={subreddit.id} 
                    className={`subreddit-link ${selectedSubreddit === subreddit.url ? 'active' : ''}`}
                    onClick={() => {
                        dispatch(setSelectedSubreddit(subreddit.url));
                        dispatch(fetchPosts(subreddit.url));
                    }} 
                >
                    {subreddit.display_name}
                </button>
            ))}
        </div>
    );
};

export default SubredditList;


