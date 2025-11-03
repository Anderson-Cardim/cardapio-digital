import { useEffect, useRef } from 'react';
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { Input } from '../Input/index';
import { Select } from '../Select/index';
import { Option } from '../Options/index';
import { ImagemUploadInput } from '../ImageUploadInput/index';
import { Button } from '../Button/index';
import CardapioContext from '../CardapioProvider/CardapioContext.js';
import { use } from 'react';



export const CadastrarProdutos = ({ isOpen, onClose }) => {

    const dialogRef = useRef(null);

    const {  adicionarProduto, produtosCad } = use(CardapioContext);
    
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

    function aoFormSubmetido(formData) {
        console.log('Form foi submetido', formData);

        const novoId = produtosCad.length + 1;
        formData.append('id', novoId);

        const produto = {
            id: formData.get('id'),
            title: formData.get('nome'),
            description: formData.get('descricao'),
            preco: formData.get('preco'),
            type: formData.get('categoria'),
            imagem: formData.get('imagem'),
        }
        console.log("produtos: ",produto);
        adicionarProduto(produto)
    }

    return (
        <dialog ref={dialogRef} className='bg-[#fff] m-4 w-full h-full p-5 md:pl-10 md:pr-10 rounded-2xl '>

                <div className='flex justify-between items-center mb-4 pb-5 pl-3 pt-2 border-b-1 border-[#5c5b5b]'>
                    <div className='flex justify-center items-center gap-2'>
                        <FaPlus size={24} />
                        <h1 className='text-[#000] font-semibold text-xl'>Novo Produto</h1>
                    </div>
                    <button 
                        autoFocus     
                        onClick={onClose}
                        className='bg-gray-200 p-1.5 rounded-full'
                    >
                        <IoClose />
                    </button>
                </div>

                <form className='lg:pl-20 lg:pr-20' action={aoFormSubmetido}>
                    <div className='flex flex-col gap-2 mt-5'>
                        <label htmlFor="" className='font-medium text-[15px]'>Nome do Produto</label>
                        <Input 
                            className="border-1 border-[#5c5b5b] rounded-xl p-3"
                            id="nome"
                            name="nome"
                            type="text"
                            placeholder="Ex: X-Burger Especial"
                        />
                    </div>
                    
                    <div className='flex flex-col gap-2 mt-5'>
                        <label htmlFor="" className='font-medium text-[15px]'>Descrição</label>
                        <Input 
                            className="border-1 border-[#5c5b5b] rounded-xl p-3 pb-10"
                            id="descricao"
                            name="descricao"
                            type="text"
                            placeholder="Descreva os ingredientes e detalhes..."
                        />
                    </div>

                    <div className='flex flex-col gap-2 mt-5'>
                        <label htmlFor="" className='font-medium text-[15px]'>Preço (R$)</label>
                        <Input 
                            className="border-1 border-[#5c5b5b] rounded-xl p-3"
                            id="preco"
                            name="preco"
                           type="text" 
                            inputMode="numeric" 
                            placeholder="R$ 0,00"
                        />
                    </div>
                    
                    <div className='flex flex-col gap-2 mt-5'>
                        <label htmlFor="" className='font-medium text-[15px]'>Categoria</label>
                        <Select name="categoria" className="border-1 border-[#5c5b5b] rounded-xl p-3" id="categoria">
                            <Option value="" disabled selected className="">
                                Selecione uma categoria
                            </Option>
                            <Option value="lanches">
                                Lanches
                            </Option>
                            <Option value="bebidas">
                                Bebidas
                            </Option>
                            <Option value="sobremesas">
                                Sobremesas
                            </Option>
                        </Select>
                    </div>

                    <div className='mt-5 flex flex-col gap-2 lg:pl-40 lg:pr-40'>
                        <label htmlFor="" className='font-medium text-[15px]'>Imagem</label>
                        <ImagemUploadInput className=" border-1 border-[#5c5b5b] border-dashed rounded-xl p-10 lg:pt-20 lg:pb-20 flex justify-center items-center" id="imagem" name="imagem"/>
                    </div>

                    <div className='lg:pl-40 lg:pr-40 lg:pt-8 lg:pb-5'>
                        <Button className="bg-[#667eea] text-[#fff] p-3 w-full rounded-xl mt-5" type="submit">
                            Adicionar Produto
                        </Button>
                    </div>
                </form>
            </dialog>
    );
}
