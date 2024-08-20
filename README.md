# StudentThreads 

## Table of Contents
1. [Introduction](#introduction)
2. [Live Demo](#live-demo)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
5. [Acknowledgements](#acknowledgements)

## Introduction

StudentThreads is a Reddit-inspired web application designed to provide a cozy, coffee shop-like experience for college students. It offers a streamlined interface where users can explore and engage with student-related content through various subreddits. Built with React and Redux, it focuses on delivering a user-friendly experience with an emphasis on simplicity and community engagement.

## Live Demo

You can view the live version of the **StudentThreads** application by following this link: [StudentThreads Live Demo](https://student-threads.netlify.app).

## Features

- **Subreddit Navigation and Search Bar**: Features an intuitive navigation bar for users to browse through various subreddits. Integrates a search bar, enabling users to quickly locate specific content within the selected subreddit.  
- **Responsive Grid Layout**: Displays posts in a responsive grid layout, shrinking from two posts per row to one per row wherever needed. 
- **Top Comments Display**: Showcases top five comments for each post, or fewer if there are less than five comments available. Enables users to grasp key points of discussion without sifting through numerous comments. Mitigates the rate limit for the free version of the Reddit API by reducing the number of API requests needed to load comments.
- **Cozy Theme**: Designed with a cozy, coffee shop-like theme that creates a welcoming and relaxing atmosphere. Features a warm color palette, carefully chosen fonts, and thoughtful design elements to enhance the user experience.

## Technologies Used 

- **React:** A JavaScript library for building user interfaces, used to create the dynamic and responsive components of the app.
- **Redux:** A state management tool that ensures a consistent flow of data throughout the application, making it easier to manage the global state across all components.
- **React Router:** Used to handle navigation and routing in the single-page application, enabling users to switch smoothly between different subreddit views.
- **Netlify:** Utilized for the deployment and hosting of the web application, providing a live URL and automatic updates directly from the GitHub repository.
- **Reddit API:** Used to retrieve and present live data from various subreddits, allowing users to explore and engage with Reddit content directly within the app.

## Acknowledgements

**Inspiration and Guidance:**  
The inspiration for this project—building a React-Redux application that interacts with the Reddit API—originated from Codecademy's [Full Stack Engineer Career Path](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path). While the project task was part of the portfolio projects offered in the course, the implementation is unique and my own.

In building this application, I utilized an example solution to better understand the foundational aspects of Redux and API integration. Some foundational code was adapted from this example, and this project complies with the MIT License. While this resource provided guidance, the final implementation is driven by my own unique work, including significant customizations and enhancements tailored to this specific project.

**Additional Resources:**  
A graphic used in this project was sourced from [Pexels](https://www.pexels.com/), created by Roman Odintsov. While attribution is not required, this contribution was important to the visual design of the application.


