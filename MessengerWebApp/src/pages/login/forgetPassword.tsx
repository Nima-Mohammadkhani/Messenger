import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
const ForgetPassword = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-6 h-dvh p-6">
      <div className="flex flex-col gap-4 w-full max-w-4xl">
        <div className="self-start">
          <Button
            iconLeft="ArrowLeft"
            title="Reset Password"
            link="/login/SignIn"
          />
        </div>
        <div className="flex flex-col gap-2 rounded-xl border border-gray-300 p-4 w-full max-w-4xl">
          <h3 className="font-bold">Forgot Your Password?</h3>
          <p className="font-light text-gray-400">
            Enter your email address and we'll send you a reset link
          </p>
          <Input label="Email" />
          <Button
            title="Send Reset Link"
            className="bg-primary text-white w-full"
            size="md"
            link="/login/signIn"
          />
          <Button
            title="Back to Sign In"
            className="w-full"
            size="md"
            link="/login/signIn"
          />
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
