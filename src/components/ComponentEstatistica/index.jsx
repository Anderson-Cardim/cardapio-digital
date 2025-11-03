


export const ComponentEstatistica = ({ iconi, title, description, children, color }) => {

    return (
        <div className="flex items-center justify-between p-3 border-1 border-[#5c5b5b]gap-5 rounded-xl">
            <div className="flex items-center gap-5 pr-4">
                <i className={`bg-[${color}] p-2 rounded-xl`}>{iconi}</i>
                <div >
                    <h1 className="font-bold text-[16px]">{title}</h1>
                    <samp className="font-medium text-[12px]">{description}</samp>
                </div>
            </div>
            <h1 className="font-bold text-2xl">{children}</h1>
        </div>
    );
}