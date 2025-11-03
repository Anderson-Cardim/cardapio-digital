import { Button } from "../Button";
import { FaPlus } from "react-icons/fa";
import { IoQrCodeOutline } from "react-icons/io5";
import { FcStatistics } from "react-icons/fc";
import { FaEdit } from "react-icons/fa";
import { use } from "react";
import CardapioContext from "../CardapioProvider/CardapioContext.js";

export const PainelGerencia = () => {
  const { openFormDialogAddProdutc, openFormDialogPersonalizarCardapio, openFormDialogQRcode, openFormDialogEstatistica } = use(CardapioContext);
  return (
    <section className="grid grid-cols-2 gap-5 lg:gap-10 p-5 lg:pl-20 lg:pr-20">

      <Button
          className="flex flex-col items-center justify-center bg-[#fff] w-full font-medium  rounded-2xl text-[#000] gap-1 md:pt-20 md:pb-20 shadow-md hover:translate-y-[-5px] hover:border-b-blue-800 hover:drop-shadow-[0_15px_45px_rgba(52,152,219,0.3)] sm:pt-10 sm:pb-10 pt-10 pb-10"
          onClick={openFormDialogAddProdutc}
      >
        <FaPlus size={24} />
        <h2>Adicionar Produto</h2>
      </Button>

      <Button
          className="flex flex-col items-center justify-center bg-[#fff] w-full font-medium  rounded-2xl text-[#000] gap-1 md:pt-20 md:pb-20 shadow-md hover:translate-y-[-5px] hover:border-b-blue-800 hover:drop-shadow-[0_15px_45px_rgba(52,152,219,0.3)] sm:pt-10 sm:pb-10 pt-10 pb-10"
          onClick={openFormDialogQRcode}
      >
        <IoQrCodeOutline size={24} />
        <h2>Gerar QR Code</h2>
      </Button>

      <Button
          className="flex flex-col items-center justify-center bg-[#fff] w-full font-medium  rounded-2xl text-[#000] gap-1 md:pt-20 md:pb-20 shadow-md hover:translate-y-[-5px] hover:border-b-blue-800 hover:drop-shadow-[0_15px_45px_rgba(52,152,219,0.3)] sm:pt-10 sm:pb-10 pt-10 pb-10"
          onClick={openFormDialogPersonalizarCardapio}
      >
       
        <FaEdit size={24} />
        <h2>Personalizar</h2>
      </Button>

      <Button
          className="flex flex-col items-center justify-center bg-[#fff] w-full font-medium  rounded-2xl text-[#000] gap-1 md:pt-20 md:pb-20 shadow-md hover:translate-y-[-5px] hover:border-b-blue-800 hover:drop-shadow-[0_15px_45px_rgba(52,152,219,0.3)] sm:pt-10 sm:pb-10 pt-10 pb-10"
          onClick={openFormDialogEstatistica}
      >
         <FcStatistics size={24} />
        <h2>Estatísticas</h2>
      </Button>
    </section>
  );
};
