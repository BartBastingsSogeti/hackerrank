// Revisiting the retryWhen Strategy
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

loadWithFetch('./api/moviess.json')
  .subscribe({
    next: renderMovies,
    error: (err) => {
      console.error('error:err', err);
    },
    complete: () => {
      console.log('complete');
    },
  });

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
