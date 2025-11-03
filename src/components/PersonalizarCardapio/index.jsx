import { useEffect, useRef } from 'react';
import { IoClose } from "react-icons/io5";
import { Input } from '../Input/index';
import { Select } from '../Select/index';
import { Option } from '../Options/index';
import { ImagemUploadInput } from '../ImageUploadInput/index';
import { Button } from '../Button/index';
import { FcStatistics } from "react-icons/fc";
import { InputTelefone } from '../PatternFormat/index';
import { FaEdit } from "react-icons/fa";
import CardapioContext from '../CardapioProvider/CardapioContext.js';
import { use } from 'react';

export const PersonalizarCardapio = ({ isOpen, onClose, perfil }) => {

    const { editPerfil } = use(CardapioContext);

    const dialogRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            openDialog();
        } else {
            closeDialog();
        }
    }, [isOpen])

    useEffect(() => {
        const dialog = dialogRef.current;
        dialog?.addEventListener('close', onClose); 
        return () => {
            dialog?.removeEventListener('close', onClose);
        }
    }, [onClose])

    const openDialog = () => {
        dialogRef.current.showModal();
    };

    const closeDialog = () => {
        dialogRef.current.close();
    };

    return (
        <dialog ref={dialogRef} className='bg-[#fff] m-4 w-full h-full p-5 md:pl-10 md:pr-10 rounded-2xl '>
                <div className='flex justify-between items-center mb-4 pb-5 pl-3 pt-2 border-b-1 border-[#5c5b5b]'>
                    <div className='flex justify-center items-center gap-2'>
                         <FaEdit size={24} />
                        <h1 className='text-[#000] font-semibold text-xl'>Personalizar Cardápio</h1>
                    </div>
                    <button 
                        autoFocus     
                        onClick={onClose}
                        className='bg-gray-200 p-1.5 rounded-full'
                    >
                        <IoClose />
                    </button>
                </div>

                <form action={editPerfil} className='lg:pl-20 lg:pr-20 md:pl-20 md:pr-20 sm:pl-20 sm:pr-20'>
                    <div className='flex flex-col gap-2 mt-5'>
                        <label htmlFor="" className='font-medium text-[15px]'>Nome do Estabelecimento</label>
                        <Input 
                            className="border-1 border-[#5c5b5b] rounded-xl p-3"
                            type="text"
                            placeholder="Lanchonete do João"
                            id="nome"
                            name="nome"
                            defaultValue={perfil?.nome}
                        />
                    </div>

                    <div className='flex flex-col gap-2 mt-5'>
                        <label htmlFor="" className='font-medium text-[15px]'>Nome do Proprietário</label>
                        <Input 
                            className="border-1 border-[#5c5b5b] rounded-xl p-3"
                            type="text"
                            placeholder="João"
                            id="nomeProprietario"
                            name="nomeProprietario"
                            defaultValue={perfil?.nomeProprietario}
                        />
                    </div>
                    
                    <div className='flex flex-col gap-2 mt-5'>
                        <InputTelefone id="telefone" name="telefone"/>
                    </div>

                    <div className='flex flex-col gap-2 mt-5'>
                        <label htmlFor="" className='font-medium text-[15px]'>Horário de Funcionamento</label>
                        <Input 
                            className="border-1 border-[#5c5b5b] rounded-xl p-3"
                            type="text" 
                            placeholder="Seg-Sáb, 18h-23h"
                            id="horario"
                            name="horario"
                            defaultValue={perfil?.horario}
                        />
                    </div>

                    <div className='flex flex-col gap-2 mt-5'>
                        <label htmlFor="" className='font-medium text-[15px]'>Endereço</label>
                        <Input 
                            className="border-1 border-[#5c5b5b] rounded-xl p-3"
                            type="text" 
                            placeholder="Rua Exemplo, 123 - Eunápolis, BA"
                            id="endereco"
                            name="endereco"
                            defaultValue={perfil?.endereco}
                        />
                    </div>


                    <div className='lg:pl-40 lg:pr-40 lg:pt-8 lg:pb-5'>
                        <Button className="bg-[#667eea] text-[#fff] p-3 w-full rounded-xl mt-5">
                            Salvar Alterações
                        </Button>
                    </div>
                </form>
            </dialog>
    );
}
