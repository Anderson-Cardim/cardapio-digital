import { Button } from "../../components/Button/index";
import { MdEdit } from "react-icons/md";
import CardapioContext from "../../components/CardapioProvider/CardapioContext";
import { use } from "react";


export const Produto = ({ title, preco, description, item}) => {

    const { openFormDialogEditProd } = use(CardapioContext);

    return (
        <div className="flex justify-between items-center p-5 border-b-1 border-[#5c5b5b]">
            <div>
                <h1>{title}</h1>
                <div className="text-[#666] flex gap-8">
                    <span>R${preco}</span>
                    <li>{description}</li>
                </div>
            </div>
            <Button children="Editar" className="font-medium text-[15px] flex items-center justify-center gap-1 cursor-pointer bg-[#667eea] hover:translate-y-[-2px] hover:border-b-[#93a6fa] hover:drop-shadow-[0_15px_45px_rgba(52,152,219,0.3)] p-2 rounded-xl text-[#fff] ml-4" onClick={() => openFormDialogEditProd(item)}>
                <MdEdit size={18}/>
                <span>Editar</span>
            </Button>
        </div>
    );
}