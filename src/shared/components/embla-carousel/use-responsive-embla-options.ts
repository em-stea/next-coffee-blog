import useBreakpoint from '@shared/hooks/use-breakpoint';
import { CENTERED_GROUPED_OPTIONS, CENTERED_OPTIONS } from './options';

export const useResponsiveEmblaOptions = () => {
  const { isLargerThanLG } = useBreakpoint();
  const emblaOptions = isLargerThanLG ? CENTERED_GROUPED_OPTIONS : CENTERED_OPTIONS;

  return emblaOptions;
};
