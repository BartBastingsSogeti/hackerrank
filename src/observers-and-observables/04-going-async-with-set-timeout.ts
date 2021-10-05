// Going async with setTimeout
import { Observable } from 'rxjs';

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
