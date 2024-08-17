import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './Post.css';
import './PostLoading.css';
import { TiMessage } from 'react-icons/ti';

const PostLoading = () => {
  return (
    <article className="post">
      <div className="post-content">
        <div className="post-votes">
          <span className="upvotes">
            👍 <Skeleton width={30} />
          </span>
          <span className="downvotes">
            👎 <Skeleton width={30} />
          </span>
        </div>
        <h3 className="post-title">
          <Skeleton width={150} />
        </h3>
        <div className="post-image-container">
          <Skeleton height={250} />
        </div>
        <div className="post-details">
          <span className="post-author">
            <Skeleton width={80} />
          </span>
          <span className="post-time">
            <Skeleton width={100} />
          </span>
          <span className="post-comments">
            <TiMessage className="icon-action" />
            <Skeleton width={40} />
          </span>
        </div>
      </div>
    </article>
  );
};

export default PostLoading;
