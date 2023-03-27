import { useEffect, RefObject } from 'react';

type Event = MouseEvent | TouchEvent;

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
) => {
  useEffect(() => {
    let startedInside: null | boolean = false;
    let startedWhenMounted: unknown = false;

    const listener = (event: Event) => {
      if (startedInside || !startedWhenMounted) return;
      if (!ref.current || ref.current.contains(event?.target as Node)) return;
      handler(event);
    };

    const validateEventStart = (event: Event) => {
      startedWhenMounted = ref?.current;
      startedInside = ref.current && ref.current.contains(event?.target as Node);
    };

    document.addEventListener('mousedown', validateEventStart);
    document.addEventListener('touchstart', validateEventStart);
    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('mousedown', validateEventStart);
      document.removeEventListener('touchstart', validateEventStart);
      document.removeEventListener('click', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
