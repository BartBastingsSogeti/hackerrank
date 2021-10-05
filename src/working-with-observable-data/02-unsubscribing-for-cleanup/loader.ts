import {
  Observable, from, defer, throwError,
} from 'rxjs';
import {
  mergeMap, retryWhen, delay, scan, takeWhile,
} from 'rxjs/operators';

const retryStrategy = ({
  maxRetryAttempts = 4,
  delayDuration = 1000,
}) => (attempts: Observable<any>) => attempts.pipe(
  scan((acc, value) => {
    const accumulator = acc + 1;
    if (accumulator < maxRetryAttempts) {
      return accumulator;
    }
    throw new Error(value);
  }, 0),
  takeWhile((acc) => acc < maxRetryAttempts),
  delay(delayDuration),
);

export const loadWithFetch = (url: string) => defer(() => from(fetch(url))
  .pipe(
    mergeMap((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return throwError(() => res);
    }),
  )).pipe(
  retryWhen(retryStrategy({})),
);

export const load = (url: string) => new Observable((observer) => {
  const xhr = new XMLHttpRequest();

  const onLoad = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);

      observer.next(data);
      observer.complete();
    } else {
      observer.error(xhr.statusText);
    }
  };

  xhr.addEventListener('load', onLoad);
  xhr.open('GET', url);
  xhr.send();

  return () => {
    xhr.removeEventListener('load', onLoad);
    xhr.abort();
  };
}).pipe(
  retryWhen(retryStrategy({
    maxRetryAttempts: 3,
    delayDuration: 1500,
  })),
);
