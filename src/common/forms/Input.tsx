import { InputHTMLAttributes } from "react";
import { ErrorMessage, Field } from "formik";
import formStyles from "./formStyles.module.scss";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  validate: (value: string) => undefined | string | Promise<undefined | string>;
}

const Input = ({
  name,
  label,
  placeholder,
  type = "text",
  ...props
}: IInput) => {
  const inputId = `${type}-input-${name}-${label}`;
  return (
    <div className={formStyles.inputContainer}>
      <label className={formStyles.inputLabel} htmlFor={inputId}>
        <strong>{label}</strong>
        <ErrorMessage name={name}>
          {(msg) => (
            <>
              {label && " - "}
              <span className={formStyles.error}>{msg}</span>
            </>
          )}
        </ErrorMessage>
      </label>
      <Field
        id={inputId}
        className={formStyles.input}
        name={name}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
