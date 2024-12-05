import styles from "./button.module.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <div className={styles.buttonContainer}>
      <a className={styles.button} onClick={onClick}>
        <span>{text}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.arrowIcon}
          fill="none"
          viewBox="0 0 30 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h20m0 0l-8-8m8 8l-8 8"
          />
        </svg>
      </a>
      <div className={styles.underline}>
        <hr />
      </div>
    </div>
  );
};

export default Button;
