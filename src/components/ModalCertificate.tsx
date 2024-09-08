import Image from "next/image";
import { useState } from "react";

type ModalCertificateProps = {
  isOpen: boolean;
  url: string;
};

export default function ModalCertificate({
  isOpen,
  url,
}: ModalCertificateProps) {
  const [isOpenModal, setIsOpenModal] = useState(isOpen);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  if (!isOpenModal) return null;
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-full z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>

      <div className="relative bg-white z-10 rounded-lg lg:w-fit w-11/12 lg:h-fit">
        <p
          className="absolute lg:-top-5 -top-3 -right-5 lg:py-2 py-1 px-5 lg:text-sm md:text-xs text-[10px] font-semibold text-white bg-red-600 rounded-xl cursor-pointer border-2 border-white"
          onClick={closeModal}
        >
          CLOSE
        </p>
        <Image
          src={url}
          alt="Certificate"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-lg"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        />
      </div>
    </div>
  );
}
