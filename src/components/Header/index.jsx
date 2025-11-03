import CardapioContext from '../CardapioProvider/CardapioContext.js';
import { use } from 'react';

export const Header = () => {

    const { personalizarPer } = use(CardapioContext);

    return (
        <header 
            className="
                w-full 
                h-70 
                bg-[#ff6b6b]
                flex 
                items-center 
                justify-center
            "
        >
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-[#fff] font-bold lg:text-5xl md:text-4xl sm:text-4xl text-3xl leading-[120%]">{personalizarPer?.nome}</h1>
                <p className="text-[#fff] font-light md:text-3xl sm:text-2xl text-2xl">Aberto: {personalizarPer?.horario}</p>

            </div>
        </header>
    )
}

