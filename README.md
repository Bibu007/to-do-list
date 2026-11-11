# To-Do List

<p align="center">
  <a href="https://bibu007.github.io/to-do-list/">
    <img src="https://img.shields.io/badge/✓%20VISIT%20NOW-22C55E?style=for-the-badge&labelColor=14532D" alt="Visit Now" />
  </a>
</p>

A To-Do List application built as part of [The Odin Project](https://www.theodinproject.com/).

This project focuses on writing maintainable, modular JavaScript by applying SOLID principles and using modern development tools such as npm and Webpack.

<img width="1470" height="775" alt="Screenshot 2026-10-02 at 3 06 36 PM" src="https://github.com/user-attachments/assets/efad21d6-ee09-4a25-9c31-bfbf54ecbfa9" />


## Features

- Create and manage tasks
- Organize tasks into projects
- View and manage individual to-do items
- Display task information, including dates
- Dynamic user interface
- Organize application logic into reusable modules

## Technologies Used

- JavaScript (ES6+)
- HTML5
- CSS3
- Webpack
- npm
- date-fns
- PubSubJS

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and npm installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Bibu007/to-do-list.git
   ```

2. Navigate to the project directory:

   ```bash
   cd to-do-list
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npx webpack serve
   ```

5. Open the local URL displayed in your terminal.

## What I Learned

While building this project, I gained experience with:

- Applying SOLID principles to structure JavaScript code.
- Using classes, getters and setters.
- Working with JavaScript modules and organizing application logic.
- Understanding how `JSON.stringify()` handles objects and why `Map` and `Set` need to be converted before serialization.
- Using PubSubJS for publish-subscribe communication.
- Managing dependencies with npm.
- Configuring Webpack for development.
- Using date-fns to work with dates.
- Designing a user flow with the first-time user experience in mind.

## Acknowledgements

- [The Odin Project](https://www.theodinproject.com/) for the project inspiration and learning resources.


Self note:
1. Set the mode to development in package.json
2. Look for your site in localhost:8088 and not dist folder
3. getter setter in classes are not enumerable. JSON methods will not work on non-enumerable properties.
4. You cannot JSON.stringify a Map/set directly. You have to first convert it to array using Array.from() then stringify it.
5. When you start working on UI, think how a first time user would use your website for you to identify the chain.
