import Button from "../../components/ui/Button";
import Icon from "../../components/ui/Icon";
import { motion } from "framer-motion";

const Index = () => {
  const features = [
    {
      icon: "Shield",
      title: "End-to-End Encryption",
      description: "Your messages are secure and private",
    },
    {
      icon: "Zap",
      title: "Lightning Fast",
      description: "Instant message delivery worldwide",
    },
    {
      icon: "Users",
      title: "Group Chats",
      description: "Create groups with up to 256 members",
    },
  ];

  const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeIn" as const,
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
      transition: { ease: "easeIn" as const, duration: 0.4 },
    },
  };

  return (
    <motion.section
      className="flex flex-col justify-center items-center gap-6 h-dvh p-6"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="bg-primary rounded-xl p-4">
          <Icon name="chatbubbles-outline" size={30} color="white" />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <h3 className="font-bold text-2xl">Welcome to ChatApp</h3>
          <p className="font-light text-gray-400">
            Connect with friends and family with our secure, fast messaging
            platform
          </p>
        </div>
      </div>

      <motion.div
        className="flex flex-col items-start gap-4 w-full max-w-4xl"
        variants={containerVariant}
      >
        {features.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-4"
            variants={itemVariant}
          >
            <div className="flex justify-center items-center rounded-full border-2 border-primary bg-base-300 w-10 h-10 p-2">
              <Icon name={item.icon} size={20} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-sm">{item.title}</h3>
              <p className="text-xs text-gray-400">{item.description}</p>
            </div>
          </motion.div>
        ))}

        <motion.div variants={itemVariant} className="w-full">
          <Button
            title="Get Started"
            className="bg-primary text-white w-full"
            size="md"
            link={"/login/signIn"}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Index;
