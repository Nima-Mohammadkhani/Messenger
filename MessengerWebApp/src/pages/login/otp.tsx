import { useState, useRef } from "react";
import Button from "../../components/ui/Button";
import { motion } from "framer-motion";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

  const buttons = [
    {
      title: "Verify & Continue",
      className: "bg-primary text-white w-full",
      link: "/",
    },
    {
      title: "Didn’t receive code? Resend",
      className: "w-full",
      link: "/login/signIn",
    },
  ];

  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < otp.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

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
      <motion.div
        className="flex flex-col gap-4 w-full max-w-4xl"
        variants={containerVariant}
      >
        <motion.div className="self-start" variants={itemVariant}>
          <Button
            iconLeft="ArrowLeft"
            title="Verification"
            link="/login/signIn"
          />
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 rounded-xl border border-gray-300 p-4 w-full max-w-4xl"
          variants={containerVariant}
        >
          <motion.h3 className="font-bold" variants={itemVariant}>
            Enter Verification Code
          </motion.h3>
          <motion.p className="font-light text-gray-400" variants={itemVariant}>
            We sent a 4-digit code to 0
          </motion.p>

          <motion.div
            className="flex gap-2 justify-between sm:justify-center"
            variants={containerVariant}
          >
            {otp.map((digit, i) => (
              <motion.div key={i} variants={itemVariant}>
                <input
                  type="text"
                  maxLength={1}
                  value={digit}
                  ref={(el) => (inputsRef.current[i] = el)}
                  className="w-12 h-12 border border-black px-0 text-center text-lg rounded"
                  onChange={(e) => handleChange(e.target.value, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                />
              </motion.div>
            ))}
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
      </motion.div>
    </motion.section>
  );
};

export default Otp;
