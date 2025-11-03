
export const ProdutoCard = ({ title, preco, desciption, type, imagem }) => {
  return (
    <div className="max-w-[450px] border-2 rounded-4xl border-gray-400 shadow-md hover:translate-y-[-5px] hover:border-[#706d6d] hover:drop-shadow-[0_15px_45px_rgba(52,152,219,0.3)]">
      <img src={imagem} alt=""  className="h-40  w-full rounded-t-4xl"/>
      <div className="flex flex-col gap-5 p-5">
        <div className="flex justify-between items-center">
            <h1 className="text-[#000] lg:text-2xl md:text-xl sm:text-[16px] text-[20px] font-semibold pr-4">
                {title}
            </h1>
            <span className="text-[#ff6b6b] lg:text-2xl md:text-xl sm:text-[16px] text-[20px] font-semibold">R${preco}</span>
        </div>
        <p className="md:text-[16px] text-[13px] font-medium text-[#666]">
          {desciption}
        </p>
      </div>

      <div className="pl-5 pb-3">
        <button className="p-1 w-25 rounded-3xl cursor-pointer font-medium sm:text-[13px] text-[14px] mb-1 bg-[#f5f5f5] text-[#99a1af]">
          {type}
        </button>
      </div>
    </div>
  );
};
