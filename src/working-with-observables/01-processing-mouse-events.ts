// Processing Mouse Events
import { fromEvent } from 'rxjs';
import { map, filter, delay } from 'rxjs/operators';

const circle = document.getElementById('circle');
const source = fromEvent(document, 'mousemove').pipe(
  map((e: MouseEvent) => ({
    x: e.clientX,
    y: e.clientY,
  })),
  filter((value) => value.x < 500),
  delay(300),
);

const onNext = (value: { x:number, y:number }) => {
  circle.style.left = `${value.x}px`;
  circle.style.top = `${value.y}px`;
};

source.subscribe({
  next: onNext,
  error: (err) => {
    console.error(`error: ${err}`);
  },
  complete: () => {
    console.log('complete');
  },
});
