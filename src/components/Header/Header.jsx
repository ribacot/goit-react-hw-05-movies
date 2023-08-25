import { useEffect, useRef, useCallback } from 'react';
import css from './Header.module.css';

export default function Header({ children, isHeight }) {
  const headerHeightRef = useRef();

  const isHeightMemo = useCallback(
    h => {
      isHeight(h);
    },
    [isHeight]
  );

  useEffect(() => {
    const heigth = headerHeightRef.current.getBoundingClientRect().height;

    isHeightMemo(heigth);
  }, [isHeightMemo]);

  return (
    <header className={css.heder} ref={headerHeightRef}>
      {children}
    </header>
  );
}
