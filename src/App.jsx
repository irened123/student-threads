import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Header from './features/Header/Header';
import SubredditList from './features/SubredditList/SubredditList';
import WelcomeMessage from './features/WelcomeMessage/WelcomeMessage';
import AboutSection from './features/AboutSection/AboutSection';
import Graphic from './features/Graphic/Graphic';
import PostGrid from './features/PostGrid/PostGrid'; 

function App() {
  const [selectedSubreddit, setSelectedSubreddit] = useState(null);

  const handleLogoClick = () => {
    setSelectedSubreddit(null); // Reset the selected subreddit to null to return to the home page
  };

  const posts = [
      { title: 'Welcome to StudentThreads!', content: 'This is your cozy corner...', author: 'Admin', date: '2024-08-10' },
      { title: 'Study Group Forming!', content: 'Looking for students to join...', author: 'John Doe', date: '2024-08-09' },
  ];

  return (
    <Router>
      <div className="App">
        <Header onLogoClick={handleLogoClick} />
        <nav>
          <SubredditList setSelectedSubreddit={setSelectedSubreddit} />
        </nav>
        <main>
          {!selectedSubreddit && (
            <>
              <WelcomeMessage />
              <AboutSection />
              <Graphic />
            </>
          )}
          {selectedSubreddit && <PostGrid posts={posts} selectedSubreddit={selectedSubreddit} />}
        </main>
      </div>
    </Router>
  );
}

export default App;

