import { forkJoin, Observable } from 'rxjs';
import {
  concat,
  filter,
  map,
  merge,
  mergeMap,
  switchMap,
} from 'rxjs/operators';

export const concatExample = (obs1: Observable<any>, obs2: Observable<any>) =>
  obs1.pipe(concat(obs2));

export const forkJoinExample = (obs1: Observable<any>, obs2: Observable<any>) =>
  forkJoin(obs1, obs2);

// multiplies payloads by 2
export const mapExample = (obs1: Observable<number>) =>
  obs1.pipe(map(val => val * 2));

// filters for payloads that are divisible by 2
export const filterExample = (obs1: Observable<number>) =>
  obs1.pipe(filter(val => val % 2 === 0));

// merge 2 observables
export const mergeExample = (obs1: Observable<any>, obs2: Observable<any>) =>
  obs1.pipe(merge(obs2));

// return a merge-mapped stream of inner & outer sources
export const mergeMapExample = (
  outer: Observable<any>,
  inner: Observable<any>,
) => outer.pipe(mergeMap(x => inner.pipe(map(val => val * +x))));

// return a switch-mapped stream of inner & outer observables
export const switchMapExample = (
  outer: Observable<any>,
  inner: Observable<any>,
) => outer.pipe(switchMap(() => inner));
