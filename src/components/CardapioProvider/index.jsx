import Context from "./CardapioContext.js";
import { useState, useEffect } from "react";

const PRODUTOS = "produtos";
const CART_KEY = "lanchonete_carrinho";

const loadCart = () => {
  try {
    const serializedCart = localStorage.getItem(CART_KEY);
    return serializedCart ? JSON.parse(serializedCart) : {};
  } catch (e) {
    console.error("Erro ao carregar o carrinho:", e);
    return {};
  }
};

const saveCart = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, serializedCart);
  } catch (e) {
    console.error("Erro ao salvar o carrinho:", e);
  }
};

export const CardapioProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const [activeButtonId, setActiveButtonId] = useState(1);

  const setFilter = (category, id) => {
    setActiveCategory(category);
    setActiveButtonId(id);
  };

  const savedProdutos = localStorage.getItem(PRODUTOS);

  const [showDialogCadastrarProduto, setShowDialogCadastrarProduto] =
    useState(false);

  const [showDialogPersonalizarCardapio, setShowDialogPersonalizarCardapio] =
    useState(false);

  const [showDialogQRcode, setShowDialogQRcode] = useState(false);

  const [showDialogEstatistica, setShowDialogEstatistica] = useState(false);

  const [showDialogEditProd, setShowDialogEditProd] = useState(false);

  const [showDialogCarrinho, setShowDialogCarrinho] = useState(false);

  const [selected, setSelected] = useState();

  const [produtos, setProdutos] = useState(
    savedProdutos ? JSON.parse(savedProdutos) : []
  );


  const [produtosCad, setProdutosCad] = useState([
    {
      id: 1,
      title: "X-Burger Especial",
      preco: "25,90",
      type: "Lanches",
      description:
        "Hambúrguer artesanal 180g, queijo cheddar, bacon, alface, tomate, cebola caramelizada e molho especial",
      imagem:
        "https://img77.uenicdn.com/image/upload/v1568110937/category/shutterstock_424917007.jpg",
      quantity: 0,
    },
    {
      id: 2,
      title: "Sanduíche de Frango Crocante",
      preco: "19,50",
      type: "Lanches",
      description:
        "Filé de frango empanado, maionese temperada, queijo prato e pão de brioche.",
      imagem:
        "https://truffle-assets.tastemadecontent.net/61a88125-sanduiche-de-frango-crocante-com-laranja_l_thumb.jpg",
      quantity: 0,
    },
    {
      id: 3,
      title: "Coca-Cola 2 Litros",
      preco: "12,00",
      type: "Bebidas",
      description: "Refrigerante Coca-Cola original, gelado, 2 litros.",
      imagem:
        "https://pizzabrasil.comprageral.com/_core/_uploads/69/2021/03/0054260321ichgjhejkb.jpg",
      quantity: 0,
    },
    {
      id: 4,
      title: "Suco Natural de Laranja",
      preco: "8,50",
      type: "Bebidas",
      description:
        "Suco fresco e natural, sem adição de açúcar ou conservantes. 500ml.",
      imagem:
        "https://www.sabornamesa.com.br/media/k2/items/cache/b018fd5ec8f1b90a1c8015900c2c2630_XL.jpg",
      quantity: 0,
    },
    {
      id: 5,
      title: "Pudim de Leite Condensado",
      preco: "10,00",
      type: "Sobremesas",
      description: "Clássico pudim cremoso com calda de caramelo caseira.",
      imagem:
        "https://s2-receitas.glbimg.com/GyLmVFUcLjec___1QQsE6R1vjFg=/0x0:1366x768/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/z/0/RsipkzTEu0Y1PGiavCpA/pudim-de-leite-condensado.jpg",
      quantity: 0,
    },
    {
      id: 6,
      title: "Brownie com Sorvete",
      preco: "14,90",
      type: "Sobremesas",
      description:
        "Brownie de chocolate meio amargo aquecido, servido com uma bola de sorvete de creme.",
      imagem:
        "https://recipesblob.oetker.com.br/assets/677216088b6540a0b110ca1d74479af6/964x526/brownie-com-sorvete.jpg",
      quantity: 0,
    },
    {
      id: 7,
      title: "Porção de Batata Frita",
      preco: "15,00",
      type: "Porções",
      description:
        "300g de batatas palito crocantes, acompanha maionese da casa.",
      imagem:
        "https://cidade1000.com.br/wp-content/uploads/2025/03/batata_frita.jpg",
      quantity: 0,
    },
    {
      id: 8,
      title: "Anéis de Cebola",
      preco: "16,50",
      type: "Porções",
      description:
        "Anéis de cebola empanados e fritos, perfeitos para petiscar.",
      imagem:
        "https://sabores-new.s3.amazonaws.com/public/2024/11/aneis-de-cebola-1.jpg",
      quantity: 0,
    },
    {
      id: 9,
      title: "Smash Duplo Cheddar",
      preco: "32,90",
      type: "Lanches",
      description:
        "Dois hambúrgueres smash de 100g, cheddar cremoso, picles e molho especial no pão de batata.",
      imagem:
        "https://conteudo.imguol.com.br/c/entretenimento/05/2022/11/03/smash-duplo-supreme-do-pa-1667487357987_v2_900x506.png",
      quantity: 0,
    },
    {
      id: 10,
      title: "Hot Dog Gourmet",
      preco: "15,00",
      type: "Lanches",
      description:
        "Salsicha artesanal, purê de batata, milho, vinagrete e batata palha.",
      imagem:
        "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/1bb63474-de63-5360-9b53-b8f125179de6/93a2318a-c126-57f7-926c-b47ca114abf5.jpg",
      quantity: 0,
    },
    {
      id: 11,
      title: "Milkshake de Oreo",
      preco: "18,90",
      type: "Bebidas",
      description:
        "Milkshake cremoso de baunilha com pedaços crocantes de biscoito Oreo. 400ml.",
      imagem:
        "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/6b6d67f1-9e5c-597e-a2a8-f1cfa6f1d942/d93ca6a5-d2c0-5583-8086-eac71164b94a.jpg",
      quantity: 0,
    },
    {
      id: 12,
      title: "Cerveja Artesanal Pilsen",
      preco: "20,00",
      type: "Bebidas",
      description:
        "Cerveja leve e refrescante, de fabricação artesanal local. 600ml.",
      imagem:
        "https://cervejabox.vteximg.com.br/arquivos/ids/249952-1000-1000/4-pilsen.jpg?v=638901507330330000",
      quantity: 0,
    },

    {
      id: 13,
      title: "Torta Holandesa",
      preco: "11,50",
      type: "Sobremesas",
      description:
        "Fatia de torta gelada com base de biscoito, recheio cremoso e cobertura de chocolate.",
      imagem:
        "https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/desserts-&-bakery/torta-holandesa/main-header.jpg",
      quantity: 0,
    },
    {
      id: 14,
      title: "Açaí na Tigela (500ml)",
      preco: "19,90",
      type: "Sobremesas",
      description:
        "Açaí puro na tigela, acompanha duas opções de fruta e granola.",
      imagem:
        "https://pontodaesfihasaosebastiao.konor.app/_core/_uploads/218/2024/03/1615010324hee0gbbcjd.png",
      quantity: 0,
    },

    {
      id: 15,
      title: "Mandioca Frita com Bacon",
      preco: "22,00",
      type: "Porções",
      description:
        "Porção generosa de mandioca frita, coberta com queijo parmesão e cubos de bacon crocante.",
      imagem:
        "https://receitas123.com/wp-content/uploads/2023/10/mandioca-frita-com-bacon.png",
      quantity: 0,
    },
    {
      id: 16,
      title: "Mini Salgados Variados",
      preco: "25,00",
      type: "Porções",
      description:
        "Mix de mini coxinhas, kibe e bolinhas de queijo (total de 30 unidades).",
      imagem:
        "https://bebe.abril.com.br/wp-content/uploads/2017/09/salgadinhos-para-festa-infantil-paulovilela.jpg?quality=70&strip=info&resize=1080,565&crop=1",
      quantity: 0,
    },
  ]);

  const [personalizarPer, setPersonalizarPer] = useState({
    id: 1,
    nome: "Lanchonete Do Anderson",
    nomeProprietario: "Anderson",
    telefone: "+55 (73) 998070124",
    horario: "Seg-Sáb, 18h-23h",
    endereco: "Rua Dois de julho, 319 - Eunápolis, BA",
    logo: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const [cart, setCart] = useState(loadCart());

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const handleQuantityChange = (productId, newQuantity) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };

      if (newQuantity > 0) {
        newCart[productId] = newQuantity;
      } else {
        delete newCart[productId];
      }

      return newCart;
    });
  };

  let cartTotal = 0;
    let whatsappOrderMessage = `Olá, ${personalizarPer.nomeProprietario}! Gostaria de fazer o seguinte pedido:\n\n`;
    
    const productMap = produtosCad.reduce((map, product) => {
        map[product.id] = product;
        return map;
    }, {});

    Object.keys(cart).forEach(productIdStr => {
        const productId = parseInt(productIdStr); 
        const quantity = cart[productId];
        const product = productMap[productId];

        if (product && quantity > 0) {
            const precoNumerico = parseFloat(product.preco.replace(',', '.'));
            const itemTotal = precoNumerico * quantity;
            cartTotal += itemTotal;

            whatsappOrderMessage += 
                `${quantity}x ${product.title} (R$ ${(itemTotal).toFixed(2).replace('.', ',')})\n`;
        }
    });

    whatsappOrderMessage += 
        `\n-------------------------\n` +
        `TOTAL GERAL: R$ ${cartTotal.toFixed(2).replace('.', ',')}\n` +
        `-------------------------\n`;

    const rawPhoneNumber = personalizarPer.telefone.replace(/\D/g, ''); 
    const encodedOrderMessage = encodeURIComponent(whatsappOrderMessage); 

    const whatsappLinkFinal = cartTotal > 0 
        ? `https://wa.me/${rawPhoneNumber}?text=${encodedOrderMessage}`
        : `https://wa.me/${rawPhoneNumber}`;

  const filteredProdutos = produtosCad.filter((produto) => {
    const isCategoryMatch =
      activeCategory === "Todos" || produto.type === activeCategory;

    const isSearchMatch =
      produto.title.toLowerCase().includes(searchTerm) ||
      produto.description.toLowerCase().includes(searchTerm);
    return isCategoryMatch && isSearchMatch;
  });

  const uniqueCategories = new Set(produtosCad.map((produto) => produto.type));

  const totalCategorias = uniqueCategories.size;

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const openFormDialogEditProd = (product) => {
    if (product) {
      setSelected(product);
    } else {
      setSelected(null);
    }
    setShowDialogEditProd(true);
  };

  const closeFormDialogEditProd = () => {
    setShowDialogEditProd(false);
    setSelected(null);
  };

  const openDialogCarrinho = (product) => {
     if (product) {
      setSelected(product);
    } else {
      setSelected(null);
    }
    setShowDialogCarrinho(true);
  }
  
  const closeFormDialogCarrinho = () => {
    setShowDialogCarrinho(false);
    setSelected(null);
  }

  const openFormDialogEstatistica = (todo) => {
    if (todo) {
      setSelected();
    }
    setShowDialogEstatistica(true);
  };

  const closeFormDialogEstatistica = () => {
    setShowDialogEstatistica(false);
    setSelected(null);
  };

  const openFormDialogQRcode = (todo) => {
    if (todo) {
      setSelected();
    }
    setShowDialogQRcode(true);
  };

  const closeFormDialogQRcode = () => {
    setShowDialogQRcode(false);
    setSelected(null);
  };

  const closeFormDialogPersonalizarCardapio = () => {
    setShowDialogPersonalizarCardapio(false);
    setSelected(null);
  };

  const openFormDialogPersonalizarCardapio = (todo) => {
    if (todo) {
      setSelected();
    }
    setShowDialogPersonalizarCardapio(true);
  };

  const openFormDialogAddProdutc = (todo) => {
    if (todo) {
      setSelected();
    }
    setShowDialogCadastrarProduto(true);
  };

  const closeFormDialogCadastrarProduto = () => {
    setShowDialogCadastrarProduto(false);
    setSelected(null);
  };

  function adicionarProduto(produto) {
    setProdutosCad([...produtosCad, produto]);
    closeFormDialogCadastrarProduto();
  }

  const editProduto = (formData) => {
    const idParaEditar = formData.get("id");
    setProdutosCad((prevState) => {
      return prevState.map((p) => {
        if (p.id.toString() === idParaEditar.toString()) {
          return {
            ...p,
            title: formData.get("nome"),
            description: formData.get("descricao"),
            preco: formData.get("preco"),
            type: formData.get("categoria"),
            imagem: formData.get("imagem"),
          };
        }
        return p;
      });
    });
    closeFormDialogEditProd();
  };

  const editPerfil = (formData) => {
    setPersonalizarPer((prevPerfil) => {
      return {
        ...prevPerfil,
        nome: formData.get("nome"),
        nomeProprietario: formData.get("nomeProprietario"),
        telefone: formData.get("telefone"),
        horario: formData.get("horario"),
        endereco: formData.get("endereco"),
        logo: formData.get("logo"),
      };
    });
    closeFormDialogPersonalizarCardapio();
  };

  const deletProduto = (id) => {
    setProdutosCad((prevState) => {
      return prevState.filter((p) => p.id !== id);
    });
    closeFormDialogEditProd();
  };

  return (
    <Context
      value={{
        showDialogCadastrarProduto,
        openFormDialogAddProdutc,
        closeFormDialogCadastrarProduto,
        showDialogPersonalizarCardapio,
        openFormDialogPersonalizarCardapio,
        closeFormDialogPersonalizarCardapio,
        openFormDialogQRcode,
        showDialogQRcode,
        closeFormDialogQRcode,
        selected,
        openFormDialogEstatistica,
        showDialogEstatistica,
        closeFormDialogEstatistica,
        adicionarProduto,
        produtos,
        setProdutos,
        produtosCad,
        setProdutosCad,
        closeFormDialogEditProd,
        openFormDialogEditProd,
        showDialogEditProd,
        editProduto,
        deletProduto,
        editPerfil,
        personalizarPer,
        setPersonalizarPer,
        filteredProdutos,
        setFilter,
        activeCategory,
        activeButtonId,
        setActiveButtonId,
        setActiveCategory,
        searchTerm,
        handleSearch,
        totalCategorias,
        cart,
        cartTotal: cartTotal.toFixed(2).replace(".", ","),
        handleQuantityChange,
        whatsappLink: whatsappLinkFinal,
        showDialogCarrinho, 
        closeFormDialogCarrinho,
        openDialogCarrinho,
      }}
    >
      {children}
    </Context>
  );
};
