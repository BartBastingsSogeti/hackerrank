import { fromEvent } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { loadWithFetch } from './loader';

const output = document.getElementById('output');
const button = document.getElementById('button');

const click = fromEvent(button, 'click');

const renderMovies = (movies = []) => {
  movies.forEach((movie) => {
    const div = document.createElement('div');
    div.innerText = movie.title;
    output.appendChild(div);
  });
};

const subObjectLoad = {
  next: renderMovies,
  error: (err) => {
    console.error('error', err);
  },
  complete: () => {
    console.log('complete');
  },
};

const subLoadWithFetch = loadWithFetch('./api/movies.json')
  .subscribe(subObjectLoad);

subLoadWithFetch.unsubscribe();

click.pipe(
  mergeMap(() => loadWithFetch('./api/movies.json')),
).subscribe(subObjectLoad);
