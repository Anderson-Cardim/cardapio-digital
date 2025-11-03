import { Button } from "../Button"
import CardapioContext from '../../components/CardapioProvider/CardapioContext.js'; 
import { use } from 'react';

export const Scroll = () => {

    const { setFilter, activeButtonId } = use(CardapioContext);

    const items = [
        {
            id: 1,
            type: "Todos"
        },
        {
            id: 2,
            type: "Lanches"
        },
        {
            id: 3,
            type: "Bebidas"
        },
        {
            id: 4,
            type: "Porções"
        },
        {
            id: 5,
            type: "Sobremesas"
        },
    ]

    return (
        <div className="flex flex-nowrap overflow-x-auto gap-10 no-scrollbar whitespace-nowrap snap-x snap-mandatory">
            {items.map((item) => {

                const isSelected = item.id === activeButtonId ;

                const color = isSelected ? 'bg-[#ee5a6f] text-[#fff]'  : 'bg-[#f5f5f5] text-[#000]';

                const baseClasses = `sm:p-3 p-1 w-40 ${color} rounded-3xl cursor-pointer font-medium sm:text-[16px] pr-5 pl-5 mb-10`;

                const classes = item.id === 1 ? `${baseClasses} ml-8` : item.id === items.length ? `${baseClasses} mr-8` : baseClasses;

                return (
                    <Button key={item.id} children={item.type} className={classes} onClick={() => setFilter(item.type, item.id)}/>
                )
            })}
        </div>
    )
}
