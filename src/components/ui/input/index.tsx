import { ComponentProps } from "react";
import styles from "./Input.module.scss";
import clsx from "clsx";
type InputProps = ComponentProps<"input"> & {
  label?: string;
  errorMessage?: string;
  wrapperClassName?: string;
};

const Input = ({
  label,
  errorMessage,
  id,
  className,
  wrapperClassName,
  ...props
}: InputProps) => {
  return (
    <div className={clsx(styles.inputWrapper, wrapperClassName)}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={clsx(styles.input, className, {
          [styles.error]: errorMessage,
        })}
        {...props}
      />
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
};

export default Input;
