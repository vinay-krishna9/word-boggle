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

## Adapted code

- For Angular specific code like components, services, routing etc.
  Source: https://angular.dev/overview

- board-validator.service.ts → DFS adjacency algorithm adapted from geeksforgeeks

  - Source: https://www.geeksforgeeks.org/dsa/boggle-find-possible-words-board-characters/
  - Source: https://www.geeksforgeeks.org/dsa/depth-first-search-or-dfs-for-a-graph/

- timer.component.ts → setInterval handling adapted from MDN examples
  Source: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
