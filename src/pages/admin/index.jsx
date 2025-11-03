import { Painel } from "../../components/Painel/index";
import { Container } from "../../components/Container/index";
import { PainelGerencia } from "../../components/PainelGerencia/index";
import { ProdutosCadastrados } from "../../components/ProdutosCadastrados/index";
import { CadastrarProdutos } from "../../components/CadastrarProduto/index";
import { use } from 'react';
import CardapioContext from '../../components/CardapioProvider/CardapioContext'; 
import { PersonalizarCardapio } from "../../components/PersonalizarCardapio/index";
import { CRcode } from "../../components/CRcode/index";
import { Estatistica } from "../../components/Estatistica/index";
import { EditProdCad } from "../../components/EditProdCad/index";

export const Admin = () => {

  const { showDialogCadastrarProduto, closeFormDialogCadastrarProduto, showDialogPersonalizarCardapio, closeFormDialogPersonalizarCardapio, showDialogQRcode, closeFormDialogQRcode, showDialogEstatistica, closeFormDialogEstatistica, showDialogEditProd, closeFormDialogEditProd, selected, personalizarPer} = use(CardapioContext);

    return (
        <>
            <Container className="min-h-screen bg-[#eeeded]">
                <section className="p-4 lg:p-10 ">
                    <Painel/>
                </section>

                <section>
                    <PainelGerencia/>
                </section>

                <section className="p-4 lg:p-10">
                    <ProdutosCadastrados/>
                </section>

                <section>
                    <CadastrarProdutos isOpen={showDialogCadastrarProduto} onClose={closeFormDialogCadastrarProduto}
                    aoSubmeter=""/>
                </section>

                <section>
                    <PersonalizarCardapio isOpen={showDialogPersonalizarCardapio} onClose={closeFormDialogPersonalizarCardapio} perfil={personalizarPer} key={personalizarPer?.id || 'edit-modal'}/>
                </section>

                <section>
                    <CRcode isOpen={showDialogQRcode} onClose={closeFormDialogQRcode}/>
                </section>

                <section>
                    <Estatistica isOpen={showDialogEstatistica} onClose={closeFormDialogEstatistica}/>
                </section>

                <section>
                    <EditProdCad isOpen={showDialogEditProd} onClose={closeFormDialogEditProd} produto={selected} key={selected?.id || 'edit-modal'}/>
                </section>
            </Container>
        </>
    )
}