import { Button } from "../Button/index";

export const ProdutoCard = ({ title, preco, desciption, type, imagem, productId, initialQuantity, onQuantityChange, }) => {
  const handleMinus = () => {
    if (initialQuantity > 0) {
      onQuantityChange(productId, initialQuantity - 1);
    }
  };

  const handlePlus = () => {
    onQuantityChange(productId, initialQuantity + 1);
  };

  return (
    <div className="max-w-[450px] border-1 rounded-4xl border-gray-400 shadow-md hover:translate-y-[1px] hover:border-[#706d6d] hover:drop-shadow">
      <img src={imagem} alt="" className="h-40  w-full rounded-t-4xl" />
      <div className="flex flex-col gap-5 p-5">
        <div className="flex justify-between items-center">
          <h1 className="text-[#000] lg:text-2xl md:text-xl sm:text-[16px] text-[20px] font-semibold pr-4">
            {title}
          </h1>
          <span className="text-[#ff6b6b] lg:text-2xl md:text-xl sm:text-[16px] text-[20px] font-semibold">
            R${preco}
          </span>
        </div>
        <p className="md:text-[16px] text-[13px] font-medium text-[#666]">
          {desciption}
        </p>
      </div>

      <div className="flex justify-between items-center pl-5 pb-3">
        <button className="p-1 w-25 rounded-3xl cursor-pointer font-medium sm:text-[13px] text-[14px] mb-1 bg-[#f5f5f5] text-[#99a1af]">
          {type}
        </button>

        <div className="quantity-selector flex items-center gap-4 pr-5">
          <Button className="flex flex-col justify-center items-center text-[28px] font-medium rounded-full h-8 w-8 bg-[#ff6b6b] text-white disabled:bg-gray-400" onClick={handleMinus} disabled={initialQuantity === 0}>
            -
          </Button>

          <span className="text-xl font-bold w-4 text-center">
            {initialQuantity}
          </span>

          <Button className="flex flex-col justify-center items-center  text-[28px] font-medium rounded-full h-8 w-8 bg-[#ff6b6b] text-white" onClick={handlePlus}>
            +
          </Button>

          
        </div>
      </div>
    </div>
  );
};
