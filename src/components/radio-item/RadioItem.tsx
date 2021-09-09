import react from "react";
import classNames from "classnames";
import "./index.scss";
interface RadioItemProps {
  id: string;
  title: string;
  value: string;
  type?: "text" | "image";
  options: { label: string; value: string; img?: string }[];
  onChange: (value: string) => void;
}
const RadioItem: React.FC<RadioItemProps> = ({
  id,
  title,
  value,
  type,
  options,
  onChange,
}) => {
  return (
    <section className="radio-group-section" id={id}>
      <h3>{title}</h3>
      <div
        className={classNames("radio-group-options", {
          "has-image": type === "image",
        })}
      >
        {options.map((option) => {
          return (
            <div key={id + option.label}>
              <div
                className={classNames("radio-field", {
                  checked: value === option.value,
                })}
                onClick={(e) => {
                  onChange(option.value);
                }}
              >
                {option.img && (
                  <div className="radio-field-image">
                    <img src={option.img} />
                  </div>
                )}
                <div>
                  <label htmlFor={option.value}>{option.label}</label>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

RadioItem.defaultProps = {
  type: "text",
};

export default RadioItem;
