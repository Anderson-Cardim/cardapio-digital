
import { ProdutoCard } from "../ProdutoCard/index";
import { use } from 'react';
import CardapioContext from '../CardapioProvider/CardapioContext.js';

export const SectionCards = () => {

    const { filteredProdutos, cart, handleQuantityChange } = use(CardapioContext);
    
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 justify-center gap-10 ">
            {filteredProdutos.map((item) => {
                return (
                    <ProdutoCard
                        key={item.id}
                        title={item.title}
                        preco={item.preco}
                        desciption={item.description}
                        type={item.type}
                        imagem={item.imagem}
                        productId={item.id}
                        initialQuantity={cart[item.id] || 0}
                        onQuantityChange={handleQuantityChange}
                    />
                )
            })}
        </div>
    );
}
                                