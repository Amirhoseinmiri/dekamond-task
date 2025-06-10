// components/Input.tsx
import { ComponentProps } from "react";
import styles from "./Input.module.scss";
import clsx from "clsx";
type InputProps = ComponentProps<"input"> & {
  label?: string;
  errorMessage?: string; // Custom error message
  wrapperClassName?: string; // Optional wrapper class name
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
        className={clsx(
          styles.input,
          className, // Allow custom className to be passed
          { [styles.error]: errorMessage } // Apply error style if errorMessage is present
        )}
        {...props}
      />
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
};

export default Input;
