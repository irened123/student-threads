import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import './Comment.css';

const Comment = ({ comment }) => {
  
  return (
    <div className="comment">
      <div className="comment-metadata">
        <p className="comment-author">{comment.author}</p>
        <p className="comment-time">
          {moment.unix(comment.created_utc).fromNow()}
        </p>
      </div>
      <div className="comment-body">
        <ReactMarkdown>{comment.body}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Comment;
