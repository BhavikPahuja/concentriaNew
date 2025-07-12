// Auth/components/AuthHeader.tsx
interface AuthHeaderProps {
  isLogin: boolean;
}

export default function AuthHeader({ isLogin }: AuthHeaderProps) {
  return (
    <h2 className="text-3xl font-bold font-[Orbitron] text-center mb-6">
      {isLogin ? "Login to Concentria" : "Create Your Account"}
    </h2>
  );
}
