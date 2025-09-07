# WordBoggle

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.0.

Boggle™ is a word game in which players attempt to find words in sequences of adjacent letters on a plastic grid of lettered dice.
Find full game rules [here](https://en.wikipedia.org/wiki/Boggle#Rules)

## Run instructions

### Running development server

Run npm install to restore dependencies.

To start a local development server, run:

```bash
npm install
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`.

#### External dependencies

[Angular CLI](https://github.com/angular/angular-cli)
[RxJS](https://rxjs.dev/)
[TypesScript](https://www.typescriptlang.org/)

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Answers to FIRST PART

Solution to questions in first part are in the file `src/app/services/scoring.ts`

Please checkout to `task/first-part` to find the solutions to the questions

Run `ng serve` on this branch as it has a basic wireframe and a button to run each function and view the results

> Word List Score function: calculateScore() and Multiplayer Score function: calculateMultiplayerScore()

```bash
git checkout task/first-part
```

## Answer to SECOND PART and Bonus features

Solution that satisfies the requirements in second part is in the `master` branch

Run `ng serve` on this branch for finished version of the game

```bash
git checkout master
```

## View Git Commit History

This zip includes the full Git repository in .git folder (maybe hidden)

To inspect the commit history:

```bash
git log --oneline

// to view the commit graph
git log --oneline --graph --decorate
```

## Adapted code

- This project contains some code and ideas with the assistance of ChatGPT
  (OpenAI). However, ChatGPT was used for brainstorming, debugging hints, and generating
  example code snippets. However, not all code was copy-pasted; a large part of
  the implementation was written, polished, and tested by me.

- For Angular specific code like components, services, routing etc.
  Source: https://angular.dev/overview

- board-validator.service.ts → DFS adjacency algorithm adapted from geeksforgeeks

  - Source: https://www.geeksforgeeks.org/dsa/boggle-find-possible-words-board-characters/
  - Source: https://www.geeksforgeeks.org/dsa/depth-first-search-or-dfs-for-a-graph/

- timer.component.ts → setInterval handling adapted from MDN examples
  Source: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
