import css from './Container.module.css';

export default function Container({ children, styles = '' }) {
  return <div className={`${css.container} ${styles}`}>{children}</div>;
}
