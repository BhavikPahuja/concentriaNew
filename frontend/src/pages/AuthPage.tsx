import AuthForm from "../components/Auth/AuthForm";

export default function AuthPage() {
  return (
    <div className="min-h-screen w-screen text-black bg-gradient-to-br from-white via-[#f4f7fa] to-[#eaeef2] flex items-center justify-center px-4">
      <AuthForm />
    </div>
  );
}