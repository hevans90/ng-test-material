import { mergeMap, flatMap, concatMap, switchMap, exhaustMap, delay } from 'rxjs/operators';
import { from, of } from 'rxjs';

const example = operator => () =>
  from([0, 1, 2, 3, 4])
    .pipe(operator(x => of(x).pipe(delay(500))))
    .subscribe(console.log, () => {}, () => console.log(`${operator.name} completed`));

const mm = example(mergeMap);
const fm = example(flatMap);
const cm = example(concatMap);
const sm = example(switchMap);
const em = example(exhaustMap);
