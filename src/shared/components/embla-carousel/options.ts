import type { EmblaOptionsType } from 'embla-carousel';

export const DEFAULT_OPTIONS: EmblaOptionsType = {
  loop: false,
  align: 'start',
  slidesToScroll: 1,
  containScroll: 'trimSnaps'
};

export const CENTERED_OPTIONS: EmblaOptionsType = {
  loop: false,
  align: 'center',
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps'
};

export const CENTERED_GROUPED_OPTIONS: EmblaOptionsType = {
  loop: false,
  align: 'start',
  slidesToScroll: 3,
  containScroll: 'trimSnaps'
};
