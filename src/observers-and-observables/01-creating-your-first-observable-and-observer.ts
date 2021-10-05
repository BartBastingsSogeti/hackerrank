// Creating Your First Observable and Observer
import { from, Observer } from 'rxjs';

const numbers = [1, 5, 10];
const source = from(numbers);

class MyObserver implements Observer<number> {
  next(value) {
    console.log(`value: ${value}`);
  }

  error(err) {
    console.error(`error: ${err}`);
  }

  complete() {
    console.log('complete');
  }
}

source.subscribe(new MyObserver());
source.subscribe(new MyObserver());
