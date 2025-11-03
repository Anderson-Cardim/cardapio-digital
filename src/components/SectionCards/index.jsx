
import { ProdutoCard } from "../ProdutoCard/index";
import { use } from 'react';
import CardapioContext from '../CardapioProvider/CardapioContext.js';

// const cards = [
//     {
//         id: 1,
//         title: "X-Burger Especial",
//         preco: "25,90",
//         desciption: "Hambúrguer artesanal 180g, queijo cheddar, bacon, alface, tomate, cebola caramelizada e molho especial",
//         buttonTitle: "Lanches"
//     },
//     {
//         id: 2,
//         title: "Suco Natural 500ml",
//         preco: "8,00",
//         desciption: "Suco 100% natural de laranja, limão, morango ou maracujá. Feito na hora!",
//         buttonTitle: "Bebidas"
//     },
//     {
//         id: 3,
//         title: "Batata Frita Grande",
//         preco: "18,00",
//         desciption: "Batata frita crocante, porção grande. Acompanha molhos especiais da casa",
//         buttonTitle: "Porções"
//     },
//     {
//         id: 4,
//         title: "Brownie com Sorvete",
//         preco: "15,00",
//         desciption: "Brownie de chocolate artesanal quentinho com sorvete de creme e calda de chocolate",
//         buttonTitle: "Sobremesas"
//     },
// ]

export const SectionCards = () => {

    const { filteredProdutos } = use(CardapioContext);
    
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
                    />
                )
            })}
        </div>
    );
}
                                