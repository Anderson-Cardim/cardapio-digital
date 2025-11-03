

export const Input = ({ description, className, ...props }) => {

    return (
        <input {...props} className={className}>
            {description}
        </input>
    );
}