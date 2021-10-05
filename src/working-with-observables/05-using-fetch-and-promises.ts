// Using fetch and Promises
import { fromEvent, from, defer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

const output = document.getElementById('output');
const button = document.getElementById('button');

const click = fromEvent(button, 'click');

const loadWithFetch = (url: string) => defer(() => from(fetch(url))
  .pipe(
    mergeMap((res) => res.json()),
  ));

const renderMovies = (movies = []) => {
  movies.forEach((movie) => {
    const div = document.createElement('div');
    div.innerText = movie.title;
    output.appendChild(div);
  });
};

loadWithFetch('./api/movies.json')
  .subscribe();

click.pipe(
  mergeMap(() => loadWithFetch('./api/movies.json')),
).subscribe({
  next: renderMovies,
  error: (err) => {
    console.error('error:err', err);
  },
  complete: () => {
    console.log('complete');
  },
});
