import { useState, useRef } from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

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

  return (
    <section className="flex flex-col justify-center items-center gap-6 h-dvh p-6">
      <div className="flex flex-col gap-4 w-full max-w-4xl">
        <div className="self-start">
          <Button
            iconLeft="ArrowLeft"
            title="Verification"
            link="/login/SignIn"
          />
        </div>
        <div className="flex flex-col gap-2 rounded-xl border border-gray-300 p-4 w-full max-w-4xl">
          <h3 className="font-bold">Enter Verification Code</h3>
          <p className="font-light text-gray-400">
            We sent a 4-digit code to 0
          </p>

          <div className="flex gap-2 justify-center">
            {otp.map((digit, i) => (
              <Input
                key={i}
                type="text"
                maxLength={1}
                value={digit}
                ref={(el) => (inputsRef.current[i] = el)}
                className="w-12 h-12 px-0 text-center text-lg rounded"
                onChange={(e) => handleChange(e.target.value, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              />
            ))}
          </div>

          <Button
            title="Verify & Continue"
            className="bg-primary text-white w-full"
            size="md"
            link="/"
          />
          <Button
            title="Didn’t receive code? Resend"
            className="w-full"
            size="md"
            link="/login/signIn"
          />
        </div>
      </div>
    </section>
  );
};

export default Otp;
