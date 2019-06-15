# coding_challenge--freighthub

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Coding challenge for `FreightHub`. </br>
This project has been bootstrapped with my personal react typescript boilerplate => [boilerplate--ts_project_starter-react](https://github.com/suddenlyGiovanni/boilerplate--ts_project_starter-react).

Some of the features that it provides:

- [Create React App](https://github.com/facebook/create-react-app)
- Typescript
- React (with hooks)
- Redux (type-safe actions / duck pattern)
- Emotion (Css-in-js)
- Jest
- testing-library/react
- testing-library/cypress
- Wallaby.js (for better user experience with TDD)
- Cyperss (for Integration and end-to-end test)
- Commitizen (to help with commits messages)
- Commitlint

[link](INSTRUCTIONS.md) to the coding challenge instructions

## At the attention of the reviewer

During my final review pass, I have noticed that the API of json-server allowed way more interactions that I had expected. The reason why I have initially overlooked them is that In the past, I have used a very similar package but with less feature (ex filter, paginate, sort).
Needless to say, this fact has severely affected the architecture choices for the whole app, and now, unfortunately, it is too late for me to convert it to a version that leverages those features.

So what are the architecture choices that I made based on the assumption that the json-server would JUST allow for simple CRUD operations?

First of all, the app retrieves all the data exposed by the `/shipments` route and saves it as an array in the redux store.
From there a Selector, that is aware of both the `filter` state and the `shipments` state, returns a Filtered and Paginated list of shipments that matches that user query.

This approach seemed reasonable enough in the context of a test application, but I'm aware that it would not be able to scale well as the datasets increase. Now, armed with the knowledge of what the json-server truly allows, I would choose a different approach.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

- Install all the dependencies:

```bash
npm i
```

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

This command will also spin up the server for you on [http://localhost:3004](http://localhost:3004)

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
