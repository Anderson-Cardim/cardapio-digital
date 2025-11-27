import { Container } from "../../components/Container/index";
import { Header } from "../../components/Header";
import { SearchInput } from "../../components/SearchInput";
import { Scroll } from '../../components/Scroll/index'
import { SectionCards } from "../../components/SectionCards";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { BsCart3 } from "react-icons/bs";
import { use } from 'react';
import CardapioContext from '../../components/CardapioProvider/CardapioContext';
import { Carrinho } from "../../components/Carrinho/index";

export const Cliente = () => {

  const { showDialogCarrinho, closeFormDialogCarrinho, openDialogCarrinho } = use(CardapioContext);

    return (
      <>
        <Container className="min-h-screen bg-[#fff]">
          <Header/>
          <section className="">
            <div className="m-8 ">
              <SearchInput 
                placeholder="Buscar produto"
              />
            </div>
              <Scroll/>

            <div className='flex justify-end lg:mr-15'>
              <Button className="cursor-pointer bg-[#ff6b6b] hover:bg-[#e20606] text-white p-4 rounded-full shadow-lg" onClick={openDialogCarrinho}>
                <BsCart3 size={35}/>
              </Button>
            </div>

            {showDialogCarrinho && (
              <Carrinho 
                isOpen={showDialogCarrinho} 
                onClose={closeFormDialogCarrinho}
              />
            )}
        
          </section>

          <section className="p-10 pb-20">
            <SectionCards/>
          </section>

          <Footer/>
        </Container>
      </>
    )
}