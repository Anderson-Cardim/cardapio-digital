import { Button } from "../../components/Button/index";
import { useNavigate, useLocation } from "react-router-dom";

const items = [
    {
        id: 1,
        description: "Cliente",
        path: '/cliente'
    },
    {
        id: 2,
        description: "Admin",
        path: '/admin'
    },
]

export const ClientAdmin = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const activeItem = items.find(item => item.path === location.pathname);
    const activeButtonId = activeItem ? activeItem.id : items[0].id;

    const handleClick = (item) => {
        navigate(item.path); 
    };

    return (
        <div className="flex 
            justify-center 
            items-center 
            bg-white 
            rounded-full 
            p-1 
            shadow-2xl 
            max-w-max 
            mx-auto 
            z-50        
            border 
            border-gray-100
            fixed                   
            left-1/2               
            -translate-x-1/2 
            top-4">
            {items.map((item) => {
           

            const isSelected = item.id === activeButtonId;

            const selectedClasses = 'bg-[#ee5a6f] text-white shadow-md'; 
            const unselectedClasses = 'bg-transparent text-gray-700 hover:bg-gray-50';

                return (
                    <Button key={item.id} className={` flex items-center gap-2 px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ease-in-out ${isSelected ? selectedClasses : unselectedClasses}`} onClick={() => handleClick(item)}>
                        {item.description}
                    </Button>
                )
            })}
        </div>
    );
}
