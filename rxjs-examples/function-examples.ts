import { forkJoin, Observable } from 'rxjs';
import {
  concat,
  filter,
  map,
  merge,
  mergeMap,
  switchMap,
} from 'rxjs/operators';

/**
 * Returns a concatenated observable of two sources
 */
export const concatExample = (obs1: Observable<any>, obs2: Observable<any>) =>
  obs1.pipe(concat(obs2));

/**
 * Returns a forkJoined observable of two sources
 */
export const forkJoinExample = (obs1: Observable<any>, obs2: Observable<any>) =>
  forkJoin(obs1, obs2);

/**
 * Returns a mapped observable of payloads multiplied by 2
 */
export const mapExample = (obs1: Observable<number>) =>
  obs1.pipe(map(val => val * 2));

/**
 * Returns a filtered observable of payloads divisible by 2
 */
export const filterExample = (obs1: Observable<number>) =>
  obs1.pipe(filter(val => val % 2 === 0));

/**
 * Returns a merged observable of two sources
 */
export const mergeExample = (obs1: Observable<any>, obs2: Observable<any>) =>
  obs1.pipe(merge(obs2));

/**
 * Returns a merge-mapped stream of inner & outer sources
 */
export const mergeMapExample = (
  outer: Observable<any>,
  inner: Observable<any>,
) => outer.pipe(mergeMap(x => inner.pipe(map(val => val * +x))));

/**
 * Returns a switch-mapped stream of inner & outer observables
 */
export const switchMapExample = (
  outer: Observable<any>,
  inner: Observable<any>,
) => outer.pipe(switchMap(() => inner));
