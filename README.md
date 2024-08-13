# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Project Description 
IdeaScape is a fullstack blog site where users can create and manage their own blog posts. Built with React.js on the frontend and Appwrite as the backend service and Database provider.


## FrontEnd

- [React.js](https://github.com/topics/reactjs) :
Utilized for building a dynamic and responsive user interface.
- [React Query](https://github.com/topics/react-query) : Used to fetch data from Appwrite efficiently.
-  [TinyMce](https://www.tiny.cloud/auth/login/?redirect_to=%2Fmy-account%2Fintegrate%2F) : Integrated as a rich text editor for creating blog posts.
- [HTML React Parser](https://www.npmjs.com/package/react-html-parser) : For parsing user-entered data from tinyMCE.
- [React Hook Form](https://github.com/topics/react-hook-form) : Handles form submissions effectively.
- [Redux Toolkit](https://github.com/topics/redux-toolkit) : Manages the application's state.
- [React Router DOM](https://github.com/topics/react-router) : Enables smooth navigation between different pages.

##BackEnd

- [Appwrite](https://appwrite.io/) : Backend service provider for handling authentication, database, and storage.
  ![Screenshot (15)](https://github.com/user-attachments/assets/478b34c6-302a-4da2-9292-de132ae27a4c)
  ![Screenshot (16)](https://github.com/user-attachments/assets/2bee27f5-de51-4659-9ad1-706cc00f9621)
  ![Screenshot (17)](https://github.com/user-attachments/assets/56679818-77d6-4ec7-b175-ba86f6bd1fe2)


- Scalable Architecture : Designed to support future implementations, upgrades, or changes.

##Functionalities

- User Authentication: Users can create an account and log in.
  ![Screenshot (14)](https://github.com/user-attachments/assets/097e0a00-92ec-476c-8060-612be8334a8b)

- Create Blog Posts: Authenticated users can create new blog posts using the rich text editor.
  ![Screenshot (13)](https://github.com/user-attachments/assets/ed5f455c-b02a-4105-b62b-54141462d774)

- Edit and Delete Posts: Only the author of a post can edit or delete it.
  ![Screenshot (18)](https://github.com/user-attachments/assets/742a7523-fb7a-44a1-a7db-e88193cc9730)

- View Posts: All users, including non-authors, can view blog posts.
  ![Screenshot (12)](https://github.com/user-attachments/assets/745861f2-fca8-41ac-b6b3-90b02dad1b79)

### Need To Install

   ```bash
   npm i
   npm @reduxjs/toolkit
   npm react-redux
   npm react-router-dom
   npm appwrite
   npm @tinymce/tinymce-react
   npm html-react-parser
   npm react-hook-form
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p



