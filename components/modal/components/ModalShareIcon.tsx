import {
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
import { ModalIconTypes } from "@/components/types/types";

const ModalShareIcon = ({
  shareUrl,
  isDisplayChallengeModal,
  title,
}: ModalIconTypes) => {
  return (
    <div className="flex items-center justify-center gap-4 py-2">
      <TwitterShareButton
        url={shareUrl}
        aria-label="Send in Messenger"
        title={title}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      {!isDisplayChallengeModal && (
        <LinkedinShareButton
          url={shareUrl}
          aria-label="Send in Messenger"
          title={title}
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      )}
      <WhatsappShareButton
        url={shareUrl}
        aria-label="Send in Messenger"
        title={title}
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <TelegramShareButton
        url={shareUrl}
        aria-label="Send in Messenger"
        title={title}
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>
    </div>
  );
};

export default ModalShareIcon;
