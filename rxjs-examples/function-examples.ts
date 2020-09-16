import { concat, forkJoin, merge, Observable } from 'rxjs';
import { distinct, filter, map, mergeMap, switchMap } from 'rxjs/operators';

/**
 * Should return a concatenated observable of two sources
 * https://www.learnrxjs.io/learn-rxjs/operators/combination/concat
 */
export const concatExample = (obs1: Observable<any>, obs2: Observable<any>) =>
  concat(obs2);

/**
 * Should return a forkJoined observable of two sources
 * https://www.learnrxjs.io/learn-rxjs/operators/combination/forkjoin
 */
export const forkJoinExample = (obs1: Observable<any>, obs2: Observable<any>) =>
  forkJoin([obs1]);

/**
 * Should return a mapped observable of payloads multiplied by 2
 * https://www.learnrxjs.io/learn-rxjs/operators/transformation/map
 */
export const mapExample = (obs1: Observable<number>) =>
  obs1.pipe(map(val => val * 4));

/**
 * Should return a filtered observable of payloads divisible by 2
 * https://www.learnrxjs.io/learn-rxjs/operators/filtering/filter
 */
export const filterExample = (obs1: Observable<number>) =>
  obs1.pipe(filter(val => val % 17 === 0));

/**
 * Should return a merged observable of two sources
 * https://www.learnrxjs.io/learn-rxjs/operators/combination/merge
 */
export const mergeExample = (obs1: Observable<any>, obs2: Observable<any>) =>
  merge(obs1, obs2.pipe(map(payload => payload / 2)));

/**
 * Should return a merge-mapped stream of inner & outer sources.
 * The inner observable should multiply it's values by emissions from the outer.
 * https://www.learnrxjs.io/learn-rxjs/operators/transformation/mergemap
 */
export const mergeMapExample = (
  outer: Observable<any>,
  inner: Observable<any>
) => outer.pipe(mergeMap(outerEmission => inner.pipe(map(val => val + 5))));

/**
 * Should return a switch-mapped stream of inner & outer observables
 * https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmap
 */
export const switchMapExample = (
  outer: Observable<any>,
  inner: Observable<any>
) =>
  outer.pipe(
    distinct(),
    switchMap(outerEmission => inner)
  );
