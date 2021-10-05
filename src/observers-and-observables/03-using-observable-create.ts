// Using Observable.create
import { Observable } from 'rxjs';

const numbers = [1, 5, 10];
const source = new Observable((observer) => {
  for (let i = 0; i < numbers.length; i += 1) {
    const n = numbers[i];
    observer.next(n);
  }

  observer.complete();
});

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
