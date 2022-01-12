
import classNames from 'classnames';

const InputGroup = ({
  label,
  field,
  touched = null,
  error = null,
  type = "text",
  value,
  onChange,
  ...props
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={field} className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={field}
        className={classNames(
          "form-control",
          { "is-invalid": touched && error },
          { "is-valid": touched && !error }
        )}
        id={field}
        onChange={onChange}
        value={value}
        {...props}
      />
      {touched && error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default InputGroup;