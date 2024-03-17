# react-testing-lab

In this lab, you will write a series of user-oriented front end tests to simulate different user interactions. While you've written unit tests before, this may be your first experience writing them for the *frontend*. While a little less intuitive, this type of testing can be very valuable for automating your otherwise manual tests. At the very least, it should give you some peace of mind to know that things you've already tested don't need to be tested again. Whenever you implement a new view or component, you can run the entire suite of tests and (assuming you wrote good test to begin with) should be able to see exactly which interactions are no longer working as expected. Most of the time, these tests won't break. But when they do, you'll be glad you wrote them!


## Getting Started

Make sure you have Node and Node Package Manager (npm) installed. If you are unsure, run `npm -v` and it should give you a version number. If you do not, go ahead and follow [this guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to get it installed.

Once you have npm installed, cd into the project directory and run `npm install` followed by `npm run dev`. It should give you a path to the localhost port where your app is being run. You can access it by copy and pasting it into a browser or Ctrl + Click (Cmd + Click for MacOS) the link. If everything is working correctly, you should see a very simple unstyled forum app. Spend 1-2 minutes interacting with the app and understanding how it might be used.

Once you have done this, run `npm run test` to run the suite of jest tests. Notice most of these tests fail because they have not yet been implemented.

## Writing Front-End Tests

Following the provided examples, finish the suite of unit tests so that all 10 provided tests pass. Use [this Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet/) to help you get a handle of React Testing Library and its features. **Notice we are using `UserEvent` instead of `FireEvent`. For our purposes, these can be used interchangably, but if you want to know more about why UserEvent is actually better for this type of testing you can read up on it [here](https://testing-library.com/docs/user-event/intro).

## Adding Your Own Component

Once all of your unit tests pass, its time to add your own component to the project and write a few unit tests to support it. Consider adding a button, checkbox, or other input type that when interacted with, changes some part of the frontend. (See 'Blue Mode' as an example.) Then, write 2-3 unit tests to validate that your new element works as expected. Be creative and have some fun with it!

When you are done, you should have *AT LEAST 12 passing unit tests* and some new element that modifies the user experience in some way.