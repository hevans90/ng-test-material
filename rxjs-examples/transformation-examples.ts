import { of } from 'rxjs';
import { switchMap, mergeMap, delay } from 'rxjs/operators';

console.log('\nRxJs Examples\n');

// emits 1,2,3
const sourceOne = of(1, 2, 3).pipe(delay(2000));

// emits 4,5,6
const sourceTwo = of(4, 5, 6).pipe(delay(1000));

// mergeMap: emit payloads from inner observable when outer emits
const example3 = sourceOne.pipe(
  mergeMap(val => {
    console.log(`outer: ${val}`);
    return sourceTwo;
  }),
);
console.log('Basic mergeMap:');
const subscribe3 = example3.subscribe(val => console.log(`inner: ${val}`));

// switchMap: emit payloads from outer observable until inner emits, at which point cancel outer
// const example4 = sourceOne.pipe(
//   switchMap(val => {
//     console.log(`outer: ${val}`);
//     return sourceTwo;
//   }),
// );
// console.log('\nBasic switchMap:');
// const subscribe4 = example4.subscribe(val => console.log(`inner: ${val}`));
