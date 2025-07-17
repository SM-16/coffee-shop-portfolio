export default function Benefit({title, description, benefitNumber}){
    return(
        <div className="bg-neutral-900/40 backdrop-blur-sm backdrop:blur-2xl border border-neutral-700/60 px- my-8 mx-4 pe-5 p-0.5 text-left rounded-lg h-fit">
            <div className="text-slate-100 -px-10 py-2.5">
                <h3 className="font-bold w-full px-5 mt-3 flex flex-row-reverse justify-between items-center">
                    <span className="text-xl ">
                        {title}
                    </span>
                    <span className="bg-neutral-900 border border-neutral-700 rounded-full text-neutral-100 px-3 py-1">{benefitNumber}</span> 
                </h3>
            </div>
            <p className="px-5 pl-14 pb-8 text-slate-100 text-sm text-right">
                {description}
            </p>
        </div>
    )
}