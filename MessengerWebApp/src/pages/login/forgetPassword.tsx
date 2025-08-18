import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { motion } from "framer-motion";

const ForgetPassword = () => {
  const buttons = [
    {
      title: "Send Reset Link",
      className: "bg-primary text-white w-full",
      link: "/login/signIn",
    },
    {
      title: "Back to Sign In",
      className: "w-full",
      link: "/login/signIn",
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
          <Button
            iconLeft="ArrowLeft"
            title="Reset Password"
            link="/login/signIn"
          />
        </div>

        <motion.div
          className="flex flex-col gap-4 rounded-xl border border-gray-300 p-4 w-full max-w-4xl"
          variants={containerVariant}
        >
          <motion.div variants={itemVariant}>
            <h3 className="font-bold">Forgot Your Password?</h3>
            <p className="font-light text-gray-400">
              Enter your email address and we'll send you a reset link
            </p>
          </motion.div>

          <motion.div variants={itemVariant}>
            <Input label="Email" />
          </motion.div>

          {buttons.map((item, i) => (
            <motion.div variants={itemVariant}>
              <Button
                key={i}
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

export default ForgetPassword;
