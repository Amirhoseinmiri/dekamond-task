import React, { ComponentProps } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";
type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
};

const Button = ({
  variant = "primary",
  size = "medium",
  disabled = false,
  ...props
}: ButtonProps) => {
  // Ensure that the variant and size are valid

  return (
    <button
      className={clsx(
        styles.button,
        styles[`variant-${variant}`], // Dynamically apply the variant
        styles[`size-${size}`], // Dynamically apply the size
        { [styles.disabled]: disabled } // Conditionally apply disabled style
      )}
      {...props}
    />
  );
};

export default Button;
