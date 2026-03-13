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
    <div className="w-full space-y-1">
      <div className="relative">
        <div
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 
        w-4 h-4 sm:w-5 sm:h-5 
        text-[#707d8f] flex items-center justify-center"
        >
          {icon}
        </div>
        <input
          name={name}
          value={value}
          placeholder={placeholder}
          required={isRequired}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          className="
          w-full md:w-md
          pl-10 sm:pl-11 pr-3 sm:pr-4
          py-2.5 sm:py-3
          text-sm sm:text-base
          rounded-xl
          bg-[#15181e]
          border border-[#272c34]
          focus:border-[#31c47f]
          outline-none
          transition
          "
        />
      </div>

      {error && <p className="text-red-500 text-xs sm:text-sm">{error}</p>}
    </div>
  );
};

export default Input;
