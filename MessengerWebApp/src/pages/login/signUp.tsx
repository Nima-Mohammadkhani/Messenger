import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { motion } from "framer-motion";

const SignUp = () => {
  const buttons = [
    {
      title: "Create Account",
      className: "bg-primary text-white w-full",
      link: "",
    },
    {
      title: "Already have an account? Sign in",
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
          <Button iconLeft="ArrowLeft" title="Create Account" link="/login" />
        </div>

        <motion.div
          className="flex flex-col gap-2 rounded-xl border border-gray-300 p-4 w-full max-w-4xl"
          variants={containerVariant}
        >
          <motion.div variants={itemVariant}>
            <h3 className="font-bold">Sign up</h3>
            <p className="font-light text-gray-400">
              Create your account to get started
            </p>
          </motion.div>

          <motion.div variants={itemVariant}>
            <Input label="Phone Number" />
          </motion.div>

          <motion.div variants={itemVariant}>
            <div className="divider text-sm">or</div>
          </motion.div>

          <motion.div variants={itemVariant}>
            <Input label="Email" />
          </motion.div>

          <motion.div variants={itemVariant}>
            <Input label="Password" />
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

export default SignUp;
