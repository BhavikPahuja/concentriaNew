// Auth/components/InputField.tsx
interface InputFieldProps {
  type: string;
  placeholder: string;
  required?: boolean;
}

export default function InputField({ type, placeholder, required = true }: InputFieldProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-2 border-2 border-[#c084fc] rounded-md outline-none focus:border-[#00fff7] transition-all"
    />
  );
}
