# FrontEndTests

This repo is a piece of learning material aimed at people wanting to explore the Angular framework, and [rxjs](https://github.com/ReactiveX/rxjs).

Ensure you do a `yarn` inside the repo to install all the required dependencies, and that you have an [LTS or greater version of node installed](https://nodejs.org/en/).

## rxjs material

[This folder](https://github.com/hevans90/ng-test-material/tree/master/rxjs-examples) contains a variety of **rxjs** material, consisting of four TypeScript files:

- [basic examples](https://github.com/hevans90/ng-test-material/blob/master/rxjs-examples/basic-examples.ts): `yarn rxjs-basic`
- [advanced examples](https://github.com/hevans90/ng-test-material/blob/master/rxjs-examples/transformation-examples.ts) (combination operators): `yarn rxjs-adv`
- [example real-world functions](https://github.com/hevans90/ng-test-material/blob/master/rxjs-examples/function-examples.ts) that return [Observables](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html), written using a mix of operators
- [unit-tests for these examples](https://github.com/hevans90/ng-test-material/blob/master/rxjs-examples/function-examples.spec.ts), written using [jest-marbles](https://www.npmjs.com/package/jest-marbles): `yarn test-rxjs`
