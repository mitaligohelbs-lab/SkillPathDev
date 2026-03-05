import { InputTypes } from "../types/types";

const Input = ({
  icon,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  isRequired,
  type,
  error,
}: InputTypes) => {
  return (
    <div className="space-y-1">
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#707d8f] flex justify-center items-center">
          {icon}
        </div>
        <input
          name={name}
          className="pr-4 pl-11 py-3 rounded-xl bg-[#15181e] border border-[#272c34] w-md focus:border-[#31c47f]"
          value={value}
          placeholder={placeholder}
          required={isRequired}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
