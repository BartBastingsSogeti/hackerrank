// Using RxJS Operators
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const numbers = [1, 5, 10];
const source = new Observable((observer) => {
  let index = 0;
  const updateNumbers = () => {
    observer.next(numbers[index]);
    index += 1;

    if (index < numbers.length) {
      setTimeout(updateNumbers, 2000);
    } else {
      observer.complete();
    }
  };

  updateNumbers();
}).pipe(
  map((n: number) => n * 2),
  filter((n:number) => n > 4),
);

source.subscribe({
  next: (value) => {
    console.log(`value: ${value}`);
  },
  error: (err) => {
    console.error(`error: ${err}`);
  },
  complete: () => {
    console.log('complete');
  },
});
