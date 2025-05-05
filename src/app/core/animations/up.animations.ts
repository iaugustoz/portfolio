import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const upAnimation = trigger('up', [
  state(
    'up',
    style({
      transform: 'translateY(-5px)',
    })
  ),
  state('down', style({ transform: 'translateY(0px)' })),
  transition('up <=> down', animate('0.3s')),
]);
