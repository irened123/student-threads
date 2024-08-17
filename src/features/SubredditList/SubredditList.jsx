import React from 'react';
import './SubredditList.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubreddits } from '../../store/subRedditSlice';
import { selectSelectedSubreddit, setSelectedSubreddit, fetchPosts } from '../../store/redditSlice';

const SubredditList = () => {  // Receive setSelectedSubreddit as a prop
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddit = useSelector(state => state.reddit.selectedSubreddit);

    return (
        <div className="subreddit-list-container">
            {subreddits.map((subreddit) => (
                <button 
                    key={subreddit.id} 
                    className={`subreddit-link ${selectedSubreddit === subreddit.url ? 'active' : ''}`}
                    onClick={() => {
                        console.log("clicking button");
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


