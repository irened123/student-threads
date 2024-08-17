import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Header from './features/Header/Header';
import SubredditList from './features/SubredditList/SubredditList';
import WelcomeMessage from './features/WelcomeMessage/WelcomeMessage';
import AboutSection from './features/AboutSection/AboutSection';
import Graphic from './features/Graphic/Graphic';
import PostGrid from './features/PostGrid/PostGrid'; 
import { selectSelectedSubreddit, setSelectedSubreddit } from './store/redditSlice';

function App() {
  const dispatch = useDispatch();
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  const handleLogoClick = () => {
    dispatch(setSelectedSubreddit(null)); 
  }
  
  return (
    <Router>
      <div className="App">
        <Header onLogoClick={handleLogoClick} />
        <nav>
          <SubredditList />
        </nav>
        <main>
          {!selectedSubreddit && (
            <>
              <WelcomeMessage />
              <AboutSection />
              <Graphic />
            </>
          )}
          {selectedSubreddit && <PostGrid selectedSubreddit={selectedSubreddit} />}
        </main>
      </div>
    </Router>
  );
}

export default App;

