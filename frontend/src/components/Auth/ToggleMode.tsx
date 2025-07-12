// Auth/components/ToggleMode.tsx
interface ToggleModeProps {
  isLogin: boolean;
  toggle: () => void;
}

export default function ToggleMode({ isLogin, toggle }: ToggleModeProps) {
  return (
    <p className="text-sm text-center text-gray-600 mt-4">
      {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
      <button
        type="button"
        onClick={toggle}
        className="text-[#ff4ecd] font-semibold hover:underline"
      >
        {isLogin ? "Sign Up" : "Login"}
      </button>
    </p>
  );
}
