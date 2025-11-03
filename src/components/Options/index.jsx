import { MdDescription } from "react-icons/md";


export const Option = ({ className, children, value}) => {


    return (
        <option className={className} value={value}>
            {children}
        </option>
    );
}