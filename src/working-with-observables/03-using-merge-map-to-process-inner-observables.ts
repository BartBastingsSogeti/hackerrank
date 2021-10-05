// Using flatMap/mergeMap to Process Inner Observables
import { fromEvent, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

const output = document.getElementById('output');
const button = document.getElementById('button');

const click = fromEvent(button, 'click');

const load = (url: string) => new Observable((observer) => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);

      observer.next(data);
      observer.complete();
    } else {
      observer.error('Something went wrong');
    }
  });

  xhr.open('GET', url);
  xhr.send();
});

const renderMovies = (movies = []) => {
  movies.forEach((movie) => {
    const div = document.createElement('div');
    div.innerText = movie.title;
    output.appendChild(div);
  });
};

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
