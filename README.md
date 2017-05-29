# Instructions

You must create a weather logging app that allows users to enter temperatures in order to calculate its median, average, highest and lowest points.

You will be provided with a MEAN stack development environment which you should use to do your work, as well as a styleguide and a mockups of the UI you should develop.

You will have 48 hours to do this test. We do not expect you to complete every single user stories in that amount of time.

We will evaluate you based on:

- How clean your code is;
- The structure of your application;
- How close the UI is to the mockup;
- Your choice of API signature;
- Your choice of UI architecture;

## Specs:

- Node.js 6 or higher
- Express.js
- Your choice of database (MongoDB, PostgreSQL, MySQL)
- Angular 1.5 or higher
- SCSS
- Your choice of npm packages that you may want to use to help you develop this app

## Requirements:

- Save the data to an DB
- Write ES2015 JavaScript or Typescript
- Write your application using Angular components as much as you can
- Calculate the median, average, highest and lowest temperature in the front-end (using Angular)
- Replicate the mockup provided to you using SCSS
- Unit test (bonus)
- Documentation (bonus)

## Final product

Once you are ready to send us your work, use git to push your changes up to your fork, and create a pull request back to the original repo (to the master branch). Then, inform your recruiter that you are done.

## User Stories:

- As a user, I want to add a temperature to my log
	- The input must only take numbers
	- You must display a validation error when invalid data is entered in the input
- As a user, I want to delete a temperature from my log
- As a user, I want to see the temperature median in my entire log
- As a user, I want to see the average temperature of my entire log
- As a user, I want to see the highest temperature in my log
- As a user, I want to see the lowest temperature in my log
- As a user, I want my data to be saved so I can come back to it later

## Installation instruction

1. Install NodeJS
2. Fork this project on your computer
3. With you command line internface, go to that project directory
4. Install Yarn globaly using NPM: `npm install -g yarn`
5. run `yarn` to install all dependencies

## Config

The environment contains a Gulp file that is configured to process your JavaScript, SCSS, images and index.html file for you.

You can run `gulp all` to start the watcher.

You can run `nodemon` to start the node server.

The `src/js/app.js` is your entry file for the AngularJS portion of the app.

The `src/scss/main.scss is your entry file for the SCSS.
