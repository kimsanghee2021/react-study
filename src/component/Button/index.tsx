import styles from "./styles.module.scss";

interface Props {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}
const Button = ({ text, onClick, disabled }: Props) => {
  return (
    <>
      <button disabled={disabled} onClick={onClick} className={styles.btn}>
        {text}
      </button>
    </>
  );
};
export default Button;
