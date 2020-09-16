import { cold } from 'jest-marbles';
import {
  concatExample,
  filterExample,
  forkJoinExample,
  mapExample,
  mergeExample,
  mergeMapExample,
  switchMapExample,
} from './function-examples';

// guidance: https://github.com/ReactiveX/rxjs/tree/master/spec/operators

describe('concat Example', () => {
  it('should concat values from 2 streams, after which complete', () => {
    const values1 = { a: 1, b: 2, c: 3 };
    const values2 = { d: 4, e: 5, f: 6 };

    const source1 = cold(' -a-b-c|', values1);
    const source2 = cold('       -d-e-f|', values2);
    const expected = cold('-a-b-c-d-e-f|', { ...values1, ...values2 });

    expect(concatExample(source1, source2)).toBeObservable(expected);
  });
});

describe('forkJoin Example', () => {
  it('should emit an array containing the final values of each stream and complete', () => {
    const values1 = { a: 1, b: 2, c: 3 };
    const values2 = { d: 4, e: 5, f: 6 };

    const source1 = cold('-a-b-c|', values1);
    const source2 = cold('-d-e-f|', values2);
    const expected = cold('------(x|)', { x: [3, 6] });

    expect(forkJoinExample(source1, source2)).toBeObservable(expected);
  });
});

describe('map Example', () => {
  it('should multiply payloads by 2', () => {
    const source = cold('-a-b-c|', { a: 5, b: 10, c: 15 });
    const expected = cold('-d-e-f|', { d: 10, e: 20, f: 30 });

    expect(mapExample(source)).toBeObservable(expected);
  });
});

describe('filter Example', () => {
  it('should only emit payloads divisible by 2', () => {
    const source = cold('  -a-b-c-d-e|', { a: 2, b: 4, c: 7, d: 13, e: 14 });
    const expected = cold('-a-b-----e|', { a: 2, b: 4, e: 14 });

    expect(filterExample(source)).toBeObservable(expected);
  });
});

describe('merge Example', () => {
  it('should merge two streams', () => {
    const values1 = { a: 1, b: 2, c: 3 };
    const values2 = { d: 4, e: 5, f: 6 };

    const source1 = cold(' -a---b---c--|', values1);
    const source2 = cold(' ---d---e---f|', values2);
    const expected = cold('-a-d-b-e-c-f|', { ...values1, ...values2 });

    expect(mergeExample(source1, source2)).toBeObservable(expected);
  });
});

describe('mergeMap Example', () => {
  it('should mergeMap two streams, emitting products of outer payload * inner payloads', () => {
    const values1 = { a: 1, b: 2, c: 3 };
    const values2 = { d: 4, e: 5, f: 6 };

    const outer = cold('   -a------b------c----|', values1);
    const inner = cold('d-e-f|', values2);
    const expected = cold('-g-h-i--j-k-l--m-n-o|', {
      g: values1.a * values2.d,
      h: values1.a * values2.e,
      i: values1.a * values2.f,
      j: values1.b * values2.d,
      k: values1.b * values2.e,
      l: values1.b * values2.f,
      m: values1.c * values2.d,
      n: values1.c * values2.e,
      o: values1.c * values2.f,
    });

    expect(mergeMapExample(outer, inner)).toBeObservable(expected);
  });
});

describe('switchMap Example', () => {
  it('should behave identically to mergeMap for two streams of adequate outer payload spacing', () => {
    const values1 = { a: 1, b: 2, c: 2 };
    const values2 = { d: 4, e: 5, f: 6 };

    const outer = cold('   -a------b------c----|', values1);
    const inner = cold('d-e-f|', values2);
    const expected = cold('-d-e-f--d-e-f--d-e-f|', { ...values1, ...values2 });

    expect(switchMapExample(outer, inner)).toBeObservable(expected);
  });

  it('should cancel inner subscriptions if outer emits while inner is emitting', () => {
    const values1 = { a: 2, b: 2, c: 3 };
    const values2 = { d: 4, e: 5, f: 6 };

    const outer = cold('   -a---b---c----|', values1);
    const inner = cold('    d-e-f|', values2);
    const expected = cold('-d-e-d-e-d-e-f|', { ...values1, ...values2 });

    expect(switchMapExample(outer, inner)).toBeObservable(expected);
  });
});
