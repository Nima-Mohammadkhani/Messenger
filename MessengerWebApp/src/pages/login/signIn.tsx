import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { motion } from "framer-motion";

const SignIn = () => {
  const buttons = [
    {
      title: "Send Verification Code",
      className: "bg-primary text-white w-full",
      link: "/login/otp",
    },
    {
      title: "Forget Password?",
      className: "w-full",
      link: "/login/forgetPassword",
    },
    {
      title: "Don't have an account? Sign up",
      className: "w-full",
      link: "/login/signUp",
    },
  ];

  const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeIn",
        delay: 0.2,
        duration: 0.4,
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeIn", duration: 0.4 },
    },
  };

  return (
    <motion.section
      className="flex flex-col justify-center items-center gap-6 h-dvh p-6"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col gap-4 w-full max-w-4xl">
        <div className="self-start">
          <Button iconLeft="ArrowLeft" title="Welcome Back" link="/login" />
        </div>

        <motion.div
          className="flex flex-col gap-2 rounded-xl border border-gray-300 p-4 w-full max-w-4xl"
          variants={containerVariant}
        >
          <motion.h3 className="font-bold" variants={itemVariant}>
            Sign In
          </motion.h3>
          <motion.p className="font-light text-gray-400" variants={itemVariant}>
            Enter your phone number or email to sign in
          </motion.p>
          <motion.div variants={itemVariant}>
            <Input label="Phone Number" />
          </motion.div>
          <motion.div variants={itemVariant} className="divider text-sm">
            or
          </motion.div>
          <motion.div variants={itemVariant}>
            <Input label="Email" />
          </motion.div>

          {buttons.map((item, i) => (
            <motion.div key={i} variants={itemVariant}>
              <Button
                title={item.title}
                className={item.className}
                size="md"
                link={item.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SignIn;
