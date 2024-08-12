import React from 'react';
import './SubredditList.css';

const SubredditList = ({ setSelectedSubreddit }) => {  // Receive setSelectedSubreddit as a prop
    const subreddits = ['r/college', 'r/CollegeLife', 'r/CollegeCooking', 'r/productivity', 'r/CollegeHumor'];

    return (
        <div className="subreddit-list-container">
            {subreddits.map((subreddit, index) => (
                <button 
                    key={index} 
                    className="subreddit-link"
                    onClick={() => setSelectedSubreddit(subreddit)} // Update parent state on click
                >
                    {subreddit}
                </button>
            ))}
        </div>
    );
};

export default SubredditList;

