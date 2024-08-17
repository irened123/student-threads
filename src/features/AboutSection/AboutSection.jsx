import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About</h2>
      <div className="about-content">
        <p>StudentThreads is designed to simplify and enrich your college experience. Whether you're looking to boost productivity, share a laugh, or take a peaceful break, we've gathered just the right spaces for you. Enjoy a focused and relaxing Reddit experience, tailored to what truly matters in college life.</p>
        <p>Here’s what you’ll find:</p>
        <ul>
          <li><strong>r/college:</strong> Navigate college life with advice, tips, and shared experiences from fellow students.</li>
          <li><strong>r/CollegeLife:</strong> Explore the fun, challenges, and daily happenings of student life.</li>
          <li><strong>r/sunset:</strong> Take a moment to unwind with beautiful sunset photos, perfect for a relaxing break from your studies.
</li>
          <li><strong>r/productivity:</strong> Get motivated with study tips, time management hacks, and more.</li>
          <li><strong>r/CollegeHumor:</strong> Take a break and enjoy some light-hearted humor to brighten your day.</li>
        </ul>
        <p>Welcome again to StudentThreads—your home for a better college experience.</p>
      </div>
    </div>
  );
};

export default AboutSection;

