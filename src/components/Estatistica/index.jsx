import { useEffect, useRef } from 'react';
import { IoClose } from "react-icons/io5";
import { FcStatistics } from "react-icons/fc";
import { ComponentEstatistica } from '../ComponentEstatistica/index';
import { FaFireAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { TfiThought } from "react-icons/tfi";
import { IoQrCode } from "react-icons/io5";


const info = [
    {
        id: 1,
        iconi: <FaEye size={24}/>,
        title: "Visualizações",
        description: "Total de acessos ao cardápio",
        children: "1,234",
        color: "#667eea"
    },
    {
        id: 2,
        iconi: <FaFireAlt size={24}/>,
        title: "Produto Mais Visto",
        description: "X-Burger Especial",
        children: "156",
        color: "#764ba2"
    },
    {
        id: 3,
        iconi: <TfiThought size={24}/>,
        title: "Cliques no WhatsApp",
        description: "Pedidos iniciados",
        children: "89",
        color: "#4facfe"
    },
    {
        id: 4,
        iconi: <IoQrCode size={24}/>,
        title: "QR Code Escaneado",
        description: "Acessos via QR",
        children: "432",
        color: "#ee5a6f"
    },
]

export const Estatistica = ({ isOpen, onClose }) => {

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
        <dialog ref={dialogRef} className='bg-[#fff] m-4 w-full h-full p-5 rounded-2xl'>
                <div className='flex justify-between items-center mb-4 pb-5 pl-3 pt-2 border-b-1 border-[#5c5b5b]'>
                    <div className='flex justify-center items-center gap-2'>
                        <FcStatistics size={24} />
                        <h1 className='text-[#000] font-semibold text-xl'>Estatistica</h1>
                    </div>
                    <button 
                        autoFocus     
                        onClick={onClose}
                        className='bg-gray-200 p-1.5 rounded-full'
                    >
                        <IoClose />
                    </button>
                </div>

                <div className='lg:pl-40 lg:pr-40 md:pl-30 md:pr-30 sm:pl-15 sm:pr-15'>

                    <div className='flex flex-col gap-5 mt-10 mb-10'>
                        {info.map((item) => {
                            return (
                                <ComponentEstatistica
                                    key={item.id}
                                    iconi={item.iconi}
                                    title={item.title}
                                    description={item.description}
                                    children={item.children}
                                    color={item.color}
                            />
                            )
                        })}
                    </div>

                    <div className='border-1 border-[#5c5b5b] border-dashed rounded-xl p-10 pt-15 pb-15 flex flex-col justify-center items-center text-[#667eea] bg-[linear-gradient(135deg,rgba(102,126,234,0.1),rgba(118,75,162,0.1))]'>
                        <FcStatistics size={24} />
                        <span>Gráfico de visualização</span>
                        <p className='font-medium text-[14px]'>Em breve...</p>    
                    </div>
                </div>
            </dialog>
    );
}
