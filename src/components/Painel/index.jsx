
import { GoGear } from "react-icons/go";
import CardapioContext from '../CardapioProvider/CardapioContext.js';
import { use } from 'react';

export const Painel = () => {

    const { produtosCad, personalizarPer, totalCategorias } = use(CardapioContext);

    return (
        <section className="p-10 lg:p-15 flex flex-col lg:gap-10 gap-5 bg-[#f5f5f5] rounded-2xl">         
        <div className="lg:pl-25 gap-3 flex flex-col">
            <div className="flex items-center gap-3" >
                <GoGear size={24}/>
                <h1 className=" text-[#000] font-bold text-3xl">Painel Admin</h1>
            </div>
            <p className=" text-[#000] font-medium text-xl">Bem-vindo, {personalizarPer?.nomeProprietario}</p>
        </div>

            <div className="flex justify-center gap-5 lg:gap-15 text-[#fff] sm:mr-4 sm:ml-4">
                <div className="bg-[#667eea] w-[30vw] lg:w-[20vw] rounded-2xl flex flex-col items-center h-[16vh] justify-center md:pt-15 md:pb-15">
                    <h1 className="font-bold sm:text-2xl text-xl">{produtosCad.length}</h1>
                    <span className="sm:text-xl ml-2 mr-2 text-[14px]">Produtos</span>
                </div>

                <div className="flex flex-col items-center justify-center bg-[#764ba2] w-[30vw] h-[16vh] rounded-2xl md:pt-15 md:pb-15 lg:w-[20vw]">
                    <h1 className="font-bold sm:text-2xl text-xl">{totalCategorias}</h1>
                    <span className="sm:text-xl ml-2 mr-2 text-[14px]">Categorias</span>
                </div>

                <div className="flex flex-col items-center justify-center bg-[#4facfe]  w-[30vw] h-[16vh] rounded-2xl md:pt-15 md:pb-15 lg:w-[20vw]">
                    <h1 className="font-bold sm:text-2xl text-xl">156</h1>
                    <span className="sm:text-xl ml-2 mr-2 text-[14px]">Visualizações</span>
                </div>
            </div>
        </section>
    );
}