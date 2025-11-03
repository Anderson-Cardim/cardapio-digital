

export const Select = ({  className, children, name, ...props }) => {
    return (
        <select className={className} name={name} {...props}>
            {children}
        </select>
    )
}