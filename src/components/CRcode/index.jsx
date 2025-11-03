import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { IoQrCodeOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { Button } from "../Button";


export const CRcode = ({ isOpen, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.addEventListener("close", onClose);
    return () => {
      dialog?.removeEventListener("close", onClose);
    };
  }, [onClose]);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <dialog
      ref={dialogRef}
      className="bg-[#fff] m-4 w-full h-full p-5 rounded-2xl "
    >
      <div className="flex justify-between items-center mb-4 pb-5 pl-3 pt-2 border-b-1 border-[#5c5b5b]">
        <div className="flex justify-center items-center gap-2">
          <IoQrCodeOutline size={24} />
          <h1 className="text-[#000] font-semibold text-xl">
            QR code do cardápio
          </h1>
        </div>
        <button
          autoFocus
          onClick={onClose}
          className="bg-gray-200 p-1.5 rounded-full"
        >
          <IoClose />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center lg:pl-45 lg:pr-45 md:pl-25 md:pr-25 sm:pl-20 sm:pr-20 lg:gap-5">
      
        <div className="flex flex-col justify-center items-center mt-5 gap-2 bg-[#f8f9ff] p-3 rounded-xl w-full ">
          <div className="flex justify-center items-center gap-2">
            <TbWorld />
            <h2 className="text-[#667eea]">URL do seu cardápio:</h2>
          </div>
          <a className="cursor-pointer text-[14px]" href="#">
            cardapio.app/lanchonete-joao
          </a>
        </div>

        <div className="flex flex-col w-[50%] justify-center items-center gap-2 border-1 border-[#5c5b5b] mt-5 pb-25 pt-25 rounded-xl">
          <IoQrCodeOutline size={35} />
          <p>QR Code</p>
        </div>
        <div>
          <div className="w-full">
            <Button className="bg-[#667eea] text-[#fff] w-full p-3 rounded-xl mt-5">
              Baixar QR Code
            </Button>
          </div>

          <div className="w-full">
            <Button className="bg-[#ee5a6f] text-[#fff] p-3 w-full w-full rounded-xl mt-5">
              Imprimir para mesa
            </Button>
          </div>

          <div className="w-full bg-amber-200 flex flex-col justify-center items-center p-5 gap-2 rounded-xl mt-5">
              <span>Dica:</span>
              <p>Imprima e coloque nas mesas! Clientes escaneiam e veem o cardápio no celular.</p>
          </div>
        </div>
      </div>
    </dialog>
  );
};
