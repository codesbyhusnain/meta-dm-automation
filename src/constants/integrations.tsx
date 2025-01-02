import { InstagramDuoToneBlue, SalesForceDuoToneBlue } from "@/icons";
import { FacebookDuoToneBlue } from "@/icons/facebook-duotone-blue";
import { WhatsAppDuoToneBlue } from "@/icons/whatsapp-duotone-blue";

type Props = {
  title: string;
  icon: React.ReactNode;
  description: string;
  strategy: "INSTAGRAM" | "FACEBOOK" | "WHATSAPP";
  disabled: boolean; // New field to indicate if the card is disabled
};

export const INTEGRATION_CARDS: Props[] = [
  {
    title: "Connect Instagram",
    description:
      "Effortlessly integrate your Instagram account to automate DMs, streamline responses, and boost audience engagement.",
    icon: <InstagramDuoToneBlue />,
    strategy: "INSTAGRAM",
    disabled: false,
  },
  {
    title: "Connect Facebook",
    description:
      "Seamlessly link your Facebook account to manage messages, comments, and interactions directly from your dashboard.",
    icon: <FacebookDuoToneBlue />,
    strategy: "FACEBOOK",
    disabled: false,
  },
  {
    title: "Connect WhatsApp",
    description:
      "Enable WhatsApp integration to automate customer communication and provide instant responses with ease.",
    icon: <WhatsAppDuoToneBlue />,
    strategy: "WHATSAPP",
    disabled: true,
  },
];
