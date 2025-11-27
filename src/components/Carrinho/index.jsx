import { useEffect, useRef } from 'react';
import { IoClose } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import CardapioContext from '../CardapioProvider/CardapioContext.js';
import { use } from 'react';

const CartItem = ({ item, handleQuantityChange }) => {
    const precoNumerico = parseFloat(item.preco.replace(',', '.'));
    const itemTotal = precoNumerico * item.quantity;

    return (
        <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <div className="flex-1 min-w-0 mr-4">
                <p className="font-semibold text-gray-800 truncate">{item.title}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
            </div>
            
            <div className="flex items-center gap-3">
                <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)} 
                    className="text-xl text-[#ff6b6b] hover:text-[#e20606] disabled:text-gray-400" 
                    disabled={item.quantity <= 0}
                >
                    -
                </button>
                <span className="font-bold w-4 text-center">{item.quantity}</span>
                <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)} 
                    className="text-xl text-[#ff6b6b] hover:text-[#e20606]"
                >
                    +
                </button>
            </div>
            
            <div className="w-20 text-right font-bold text-gray-800">
                R$ {itemTotal.toFixed(2).replace('.', ',')}
            </div>
        </div>
    );
}

export const Carrinho = ({ isOpen, onClose }) => {

    const { cart, produtosCad, cartTotal, handleQuantityChange, whatsappLink } = use(CardapioContext);

    const productMap = produtosCad.reduce((map, product) => {
        map[product.id] = product;
        return map;
    }, {});
    
    const cartItems = Object.keys(cart).map(id => {
        const productId = parseInt(id);
        const quantity = cart[productId];
        const product = productMap[productId];
        
        if (product && quantity > 0) {
            return {
                ...product,
                quantity: quantity
            };
        }
        return null;
    }).filter(item => item !== null);

    const isCartEmpty = cartItems.length === 0;

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
        dialog?.addEventListener('close', onClose); 
        return () => {
            dialog?.removeEventListener('close', onClose);
        }
    }, [onClose]);

    const openDialog = () => {
        dialogRef.current?.showModal();
    };

    const closeDialog = () => {
        dialogRef.current?.close();
    };

    return (
        <dialog ref={dialogRef} className='bg-[#fff] m-4 min-w-[200px] w-[600px]  max-h-[90vh] rounded-2xl p-5 shadow-2xl '>
            <div className='flex justify-between items-center mb-4 pb-4 border-b border-gray-300'>
                <div className='flex justify-center items-center gap-2'>
                    <FaEdit size={24} className="text-[#ff6b6b]"/> 
                    <h1 className='text-gray-800 font-bold text-2xl'>Seu Carrinho</h1>
                </div>
                <button 
                    autoFocus     
                    onClick={onClose}
                    className='bg-gray-200 p-2 rounded-full text-gray-600 hover:bg-gray-300 transition'
                >
                    <IoClose size={20} />
                </button>
            </div>

            <div className='overflow-y-auto max-h-[60vh]'>
                {isCartEmpty ? (
                    <p className="text-gray-500 text-center py-10">O carrinho está vazio. Adicione um produto!</p>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <CartItem 
                                key={item.id} 
                                item={item} 
                                handleQuantityChange={handleQuantityChange}
                            />
                        ))}
                    </>
                )}
            </div>

            <div className='mt-5 pt-5 border-t border-gray-300'>
                <div className='flex justify-between items-center text-xl font-bold mb-4'>
                    <span className="text-gray-800">Total:</span>
                    <span className="text-[#ff6b6b]">R$ {cartTotal}</span>
                </div>
                
                <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className={`block w-full text-center p-3 rounded-full text-lg font-bold transition 
                        ${isCartEmpty ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#25d366] text-white hover:bg-green-600'}`}
                >
                    {isCartEmpty ? 'Carrinho Vazio' : `Fazer Pedido por WhatsApp (R$ ${cartTotal})`}
                </a>
            </div>
        </dialog>
    );
}