import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About</h2>
      <div className="about-content">
        <p>StudentThreads is designed to simplify and enrich your college experience. Whether you're looking to boost productivity, share a laugh, or take a peaceful break, we've gathered just the right spaces for you. Enjoy a focused and relaxing Reddit experience, tailored to what truly matters in college life.</p>
        <p class="nunito">Here’s what you’ll find:</p>
        <ul>
          <li><strong>r/college:</strong> Navigate college life with advice, tips, and shared experiences from fellow students.</li>
          <li><strong>r/StudyTips:</strong> Improve your study habits and academic performance with practical tips and strategies.</li>
          <li><strong>r/sunset:</strong> Take a moment to unwind with beautiful sunset photos, perfect for a relaxing break from your studies.
</li>
          <li><strong>r/productivity:</strong> Get motivated with study tips, time management hacks, and more.</li>
          <li><strong>r/CollegeMemes:</strong> Enjoy a collection of relatable and hilarious memes that capture the ups and downs of college life.</li>
        </ul>
        <p class="nunito">Welcome again to StudentThreads—your home for a better college experience.</p>
      </div>
    </div>
  );
};

export default AboutSection;

