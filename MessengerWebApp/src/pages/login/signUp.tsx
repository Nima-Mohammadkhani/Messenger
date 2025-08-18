import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
const SignUp = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-6 h-dvh p-6">
      <div className="flex flex-col gap-4 w-full max-w-4xl">
        <div className="self-start">
          <Button iconLeft="ArrowLeft" title="Create Account" link="/login" />
        </div>
        <div className="flex flex-col gap-2 rounded-xl border border-gray-300 p-4 w-full max-w-4xl">
          <h3 className="font-bold">Sign up</h3>
          <p className="font-light text-gray-400">
            Create your account to get started
          </p>
          <Input label="Phone Number" />
          <div className="divider text-sm">or</div>
          <Input label="Email" />
          <Input label="password" />
          <Button
            title="Create Account"
            className="bg-primary text-white w-full"
            size="md"
          />
          <Button
            title="Already have an account? Sign in"
            className="w-full"
            size="md"
            link="/login/signIn"
          />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
