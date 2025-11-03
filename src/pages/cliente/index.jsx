import { Container } from "../../components/Container/index";
import { Header } from "../../components/Header";
import { SearchInput } from "../../components/SearchInput";
import { Scroll } from '../../components/Scroll/index'
import { SectionCards } from "../../components/SectionCards";
import { Footer } from "../../components/Footer";

export const Cliente = () => {

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
          </section>

          <section className="p-10 pb-20">
            <SectionCards/>
          </section>

          <Footer/>
        </Container>
      </>
    )
}