import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';
import { vi } from 'vitest';

const onChange = vi.fn();

describe('Input', () => {
  beforeEach(() => {
    onChange.mockReset();
  });

  it('renders input element with correct value', () => {
    const value = 'Hello';
    const { getByRole } = render(<TextInput value={value} onChange={onChange} />);
    const inputElement = getByRole('textbox') as HTMLInputElement;
    expect(inputElement.value).toBe(value);
  });

  it('calls onChange callback when input value changes', () => {
    const value = 'Hello';
    const { getByRole } = render(<TextInput value={value} onChange={onChange} />);
    const inputElement = getByRole('textbox') as HTMLInputElement;

    const newValue = 'World';
    fireEvent.change(inputElement, { target: { value: newValue } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('World');
  });

  it('updates input value when value prop changes', () => {
    const { getByRole } = render(<TextInput value="Hello" onChange={onChange} />);
    const inputElement = getByRole('textbox') as HTMLInputElement;

    const newValue = 'World';
    fireEvent.change(inputElement, { target: { value: newValue } });

    expect(inputElement.value).toBe('World');
  });

  
  it('renders input element with correct placeholder', () => {
    const placeholder = 'Enter text';
    const { getByPlaceholderText } = render(<TextInput placeholder={placeholder} value="" onChange={onChange} />);
    const inputElement = getByPlaceholderText(placeholder) as HTMLInputElement;

    expect(inputElement).toBeInTheDocument();
  });
});