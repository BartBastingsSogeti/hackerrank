// An Easier Observer
import { from } from 'rxjs';

const numbers = [1, 5, 10];
const source = from(numbers);

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
