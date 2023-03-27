import React, { PropsWithChildren, useCallback, useRef } from 'react';
import useOnClickOutside from '~/utils/hooks/useOnClickOutside';

import styles from './styles.module.css';

interface PopoverProps extends PropsWithChildren {
  isOpen: boolean;
  toggle: (isOpen: boolean) => void;
  className?: string;
  content: React.ReactNode;
}

const Popover = ({ isOpen, toggle, className, content }: PopoverProps) => {
  const popover = useRef<HTMLDivElement>(null);
  const close = useCallback(() => toggle(false), []);
  useOnClickOutside(popover, close);
  if (!isOpen) return null;
  return (
    <div className={`${styles.popover} ${className || ''}`} ref={popover}>
      {content}
    </div>
  );
};

export default Popover;
