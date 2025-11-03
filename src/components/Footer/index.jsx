import { Button } from "../Button"
import CardapioContext from '../CardapioProvider/CardapioContext.js';
import { use } from 'react';

export const Footer = () => {
    

    const { personalizarPer, whatsappLink } = use(CardapioContext);

    return (
        <footer className="bg-[#333] h-60 flex flex-col items-center justify-center gap-8">

            <a href={whatsappLink} className="flex items-center justify-center p-3 w-[80vw] rounded-2xl bg-green-600 text-[#fff] shadow-md hover:translate-y-[-2px] hover:border-[#005523] cursor-pointer mt-5" target="_blank">
                Faça seu pedido pelo WhatsApp
            </a>
            
            <div className="flex flex-col items-center justify-center text-[#999]">
                <span>{personalizarPer?.endereco}</span>
                <span>{personalizarPer?.telefone}</span>
            </div>
            <div className="text-[#999]">
                <p>Cardápio Digital - Powered by Anderson Cardim</p>
            </div>
        </footer>
    );
}