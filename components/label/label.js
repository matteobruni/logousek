import styles from "./styles.module.css";

function Label({children, content, color}) {
  return (
    <div className={styles.labelWrapper} style={{ background: color}}>
        <p className={styles.labelText}>
            {children || content}
        </p>
    </div>
  );
}

export default Label;
