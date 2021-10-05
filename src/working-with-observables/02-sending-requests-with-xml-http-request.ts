// Sending Requests with XmlHttpRequest
import { fromEvent } from 'rxjs';

const output = document.getElementById('output');
const button = document.getElementById('button');

const click = fromEvent(button, 'click');

const load = () => {
  const url = './api/movies.json';
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const movies = JSON.parse(xhr.responseText);

      movies.forEach((movie) => {
        const div = document.createElement('div');
        div.innerText = movie.title;
        output.appendChild(div);
      });
    }
  });
  xhr.open('GET', url);
  xhr.send();
};

click.subscribe({
  next: load,
  error: (err) => {
    console.error(`error: ${err}`);
  },
  complete: () => {
    console.log('complete');
  },
});
