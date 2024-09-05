import { useState } from "react";
import './TextInput.css';

type TextInputProps = {
  placeholder?: string;
  value: string;
  onChange: (e: string) => void;
};

const TextInput = ({ placeholder, value, onChange }: TextInputProps) => {
  const [inputValue, setInputValue] = useState(value);
  
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputValue(text);
    onChange(text);
  }

  return (
    <input
      className="input"
      placeholder={placeholder}
      value={inputValue}
      onChange={onChangeHandler}
    />
  );
};

export default TextInput;