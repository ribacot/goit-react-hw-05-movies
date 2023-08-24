import css from './Button.module.css';
export default function Button({ children, styles = '' }) {
  return (
    <button className={`${css.buttonNav} ${styles}`}  >
      {children}
    </button>
  );
}
// onClick={()=>`${window.location.href=homepage}`}
// onClick={`${window.location.href=homepage}`}