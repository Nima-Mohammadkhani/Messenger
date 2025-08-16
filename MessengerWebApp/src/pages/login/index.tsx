import Button from "../../components/ui/Button";
import Icon from "../../components/ui/Icon";

const Index = () => {
  const features: {
    icon: string;
    title: string;
    description: string;
  }[] = [
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

  return (
    <section className="flex flex-col justify-center items-center gap-6 flex-1">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="bg-primary rounded-xl p-4">
          <Icon name="MessageSquare" size={30} color="white" />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <h3 className="font-bold text-2xl">Welcome to ChatApp</h3>
          <p className="text-gray-400">
            Connect with friends and family with our secure, fast messaging
            platform
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 w-full max-w-4xl">
        {features.map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="flex justify-center items-center rounded-full border-2 border-primary bg-base-300 w-10 h-10 p-2">
              <Icon name={item.icon} size={20} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-sm">{item.title}</h3>
              <p className="text-xs text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
        <Button
          title="Get Started"
          className="bg-primary text-white w-full"
          size="md"
        />
      </div>
    </section>
  );
};

export default Index;
