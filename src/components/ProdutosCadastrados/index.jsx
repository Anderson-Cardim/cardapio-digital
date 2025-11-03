import { Produto } from "../../components/Produto/index";
import { use } from 'react';
import CardapioContext from '../../components/CardapioProvider/CardapioContext.js'; 

export const ProdutosCadastrados = () => {

    const {  produtosCad } = use(CardapioContext);

    return (
        <section className="p-10 flex flex-col gap-5 bg-[#f5f5f5] rounded-2xl ">
            <div className="flex flex-col justify-center items-center lg:pl-30 lg:pr-30 md:pl-10 md:pr-10">
                <h1 className="font-bold text-2xl">Produtos Cadastrados</h1>
                <div className="mt-4 w-full">
                    {
                        produtosCad.map((item) => {
                            return (
                                <Produto
                                    key={item.id}
                                    title={item.title}
                                    preco={item.preco}
                                    description={item.type}
                                    item={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}