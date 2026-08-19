import styles from './Spinner.module.css'
import { ImSpinner9 } from "react-icons/im";

export default function Spinner() {
  return (
    <div className={styles.spinner}>
      <ImSpinner9 className={styles.icon}  />
    </div>
  );
}
