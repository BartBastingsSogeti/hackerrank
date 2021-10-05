// Implementing Retry Logic with retry and retryWhen
import { fromEvent, Observable } from 'rxjs';
import {
  mergeMap, retryWhen, delay, scan, takeWhile,
} from 'rxjs/operators';

const output = document.getElementById('output');
const button = document.getElementById('button');

const click = fromEvent(button, 'click');

const retryStrategy = ({
  maxRetryAttempts = 4,
  delayDuration = 1000,
}) => (attempts: Observable<any>) => attempts.pipe(
  scan((acc) => acc + 1, 0),
  takeWhile((acc) => acc < maxRetryAttempts),
  delay(delayDuration),
);

const load = (url: string) => new Observable((observer) => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);

      observer.next(data);
      observer.complete();
    } else {
      observer.error(xhr.statusText);
    }
  });

  xhr.open('GET', url);
  xhr.send();
}).pipe(
  retryWhen(retryStrategy({
    maxRetryAttempts: 3,
    delayDuration: 1500,
  })),
);

const renderMovies = (movies = []) => {
  movies.forEach((movie) => {
    const div = document.createElement('div');
    div.innerText = movie.title;
    output.appendChild(div);
  });
};

load('./api/movies.json')
  .subscribe(renderMovies);

click.pipe(
  mergeMap(() => load('./api/movies.json')),
).subscribe({
  next: renderMovies,
  error: (err) => {
    console.error('error:err', err);
  },
  complete: () => {
    console.log('complete');
  },
});
