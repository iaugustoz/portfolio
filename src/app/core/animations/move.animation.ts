import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const moveAnimation = trigger('move', [
  state('move-left', style({ transform: 'translate(0px)' })),
  state('move-right', style({ transform: 'translate(20px)' })),
  transition('move-left <=> move-right', animate('0.4s')),
]);
