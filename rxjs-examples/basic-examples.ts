import { forkJoin, of } from 'rxjs';
import { concat } from 'rxjs/operators';

console.log('\nRxJs Examples\n');

// emits 1,2,3
const sourceOne = of(1, 2, 3);

// emits 4,5,6
const sourceTwo = of(4, 5, 6);

// concat: emit values from sourceOne, when complete, subscribe to sourceTwo
const example1 = sourceOne.pipe(concat(sourceTwo));
console.log('Basic concat:');
const subscribe1 = example1.subscribe(val => console.log(val));

//forkJoin: return an array of the latest values from each stream
const example2 = forkJoin(sourceOne, sourceTwo);
console.log('Basic forkJoin:');
const subscribe2 = example2.subscribe(val => console.log(val));
