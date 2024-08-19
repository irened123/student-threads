export const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
  try {
    const response = await fetch(`${API_ROOT}/${subreddit}.json`);

    if (response.status === 429) {
      throw new Error('You have reached the API rate limit. Please try again later.');
    }

    const json = await response.json();
    return json.data.children.map((post) => post.data);
  } catch (error) {
    console.error('Error fetching subreddit posts:', error);
    throw error; // Re-throw the error so it can be handled in the redux slice
  }
};

export const getSubreddits = async () => {
  try {
    const response = await fetch(`${API_ROOT}/subreddits.json`);

    if (response.status === 429) {
      throw new Error('You have reached the API rate limit. Please try again later.');
    }

    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data);
  } catch (error) {
    console.error('Error fetching subreddit:', error);
    throw error; 
  }
};

export const getPostComments = async (permalink) => {
  try {
    const response = await fetch(`${API_ROOT}/${permalink}.json`);

    if (response.status === 429) {
      throw new Error('You have reached the API rate limit. Please try again later.');
    }
    
    const json = await response.json();
    return json[1].data.children.map((subreddit) => subreddit.data);
  } catch (error) {
    console.error('Error fetching post comments:'.error);
    throw error; 
  }
};
