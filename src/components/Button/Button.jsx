import styles from './Button.module.scss';

const Button = ({ type, onClick, className, children }) => {
  return (
    <button
      type={type}
      className={className ? className : styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
