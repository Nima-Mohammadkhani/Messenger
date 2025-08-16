import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
const SignIn = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-6 flex-1">
      <div className="flex flex-col gap-4 w-full max-w-4xl">
        <div className="self-start">
          <Button iconLeft="ArrowLeft" title="Welcome Back" link="/login" />
        </div>
        <div className="flex flex-col gap-2 rounded-xl border border-gray-300 p-4 w-full max-w-4xl">
          <h3 className="font-bold">Sign In</h3>
          <p className="font-light text-gray-400">
            Enter your phone number or email to sign in
          </p>
          <Input label="Phone Number" />
          <div className="divider text-sm">or</div>
          <Input label="Email" />
          <Button
            title="Send Verification Code"
            className="bg-primary text-white w-full"
            size="md"
          />
          <Button
            title="Forget Password?"
            className="w-full"
            size="md"
            link="/login/forgetPassword"
          />
          <Button
            title="Don't have an account? Sign up"
            className="w-full"
            size="md"
            link="/login/signUp"
          />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
