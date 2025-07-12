// Auth/components/SubmitButton.tsx
interface SubmitButtonProps {
  label: string;
}

export default function SubmitButton({ label }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="w-full py-2 bg-[#00fff7] text-gray-900 font-semibold rounded-md hover:bg-[#00e6df] transition-all"
    >
      {label}
    </button>
  );
}
