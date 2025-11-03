import { IoIosSearch } from "react-icons/io";
import CardapioContext from '../CardapioProvider/CardapioContext.js';
import { use } from 'react';

export const SearchInput = (props) => {

    const { searchTerm, handleSearch } = use(CardapioContext);

    const handleChange = (event) => {
        handleSearch(event.target.value); 
    };

    return (
        <div className="flex justify-center items-center gap-2 border-2 pl-5 rounded-2xl border-gray-400">
            <IoIosSearch size={30}/>
            <input 
                className="w-full focus:border-transparent focus:outline-none sm:p-4 p-3 sm:placeholder:text-2xl placeholder:text-xl lg:text-2xl sm:text-xl text-[16px]" 
                {...props} 
                value={searchTerm} 
                onChange={handleChange}
            />

        </div>
    );
}