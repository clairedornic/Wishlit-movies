# Wishlist movies app
This repository contains the code for a React application created with Create React App, written in TypeScript. The purpose of this application is to find and add movies to your wishlist.

## Project Structure

To ensure a clean and organized codebase, I made the following architectural choices:

- **Pages:** I created a `pages` directory to prepare for potential expansion of the application to include multiple pages. Currently, it contains the Wishlist page.

- **Components:** All reusable components are located in the `components` directory. Within this directory, there is a specific `wishlist` subdirectory where the components related to the Wishlist feature are kept.

- **Styling:** I opted for the BEM (Block, Element, Modifier) naming convention and used Sass for styling. Stylesheets are divided into separate files, making it easy to locate styles for specific components.

- **Assets:** Assets, such as fonts, icons, images, and data files, are organized into subdirectories based on their types for better maintainability.

## Getting Started

To run this project locally, follow these steps:

```bash
   git clone <repository_url>

   cd <project_directory>

   npm install

   npm run start
```

The application should now be running locally on your machine. You can access it in your web browser by opening http://localhost:3000.
