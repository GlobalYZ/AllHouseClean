import { useState } from "react";
import { Modal } from "./Modal";
import Wechat from "@/assets/icons/wechat.svg";
import Facebook from "@/assets/icons/facebook.svg";
import Instagram from "@/assets/icons/instagram.svg";
import WechatQR from "@/assets/images/wechatQR.jpg";
import Image from "next/image";
export const SocialLinks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWechatClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center gap-8">
      <a
        href="https://www.facebook.com/61576212511142"
        target="_blank"
        rel="noopener noreferrer"
        title="Follow us on Facebook"
        className="w-8 h-8 btn-circle"
      >
        <Facebook />
      </a>
      <a
        href="https://www.instagram.com/allhouseclean/"
        target="_blank"
        rel="noopener noreferrer"
        title="Follow us on Instagram"
        className="w-8 h-8 btn-circle bg-[#c13584]"
      >
        <Instagram />
      </a>
      <a
        title="Follow us on WeChat"
        className="w-8 h-8 btn-circle"
        onClick={handleWechatClick}
      >
        <Wechat />
      </a>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="WeChat QR Code"
      >
        <div className="flex justify-center">
          <Image
            src={WechatQR}
            alt="WeChat QR Code"
            className="object-contain max-h-[70vh]"
          />
        </div>
      </Modal>
    </div>
  );
};
