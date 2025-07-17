export default function Premium(){
    return(
        <div className="w-80  border border-b-slate-100/50 border-slate-300/20 rounded-lg p-4 backdrop-blur-xs bg-cyan-200/5">
            <h2 className="text-center pt-4 font-extrabold text-3xl font-serif">
                Premium 
            </h2>
            <h3 className="text-xl text-center font-serif">
                $49
            </h3>
            <ul className="w-full text-justify list-image-[url(/images/check-silver.png)] list-inside *:mb-2.5 h-fit p-5">
                <li>24-pack premium selection</li>
                <li>Free delivery on all orders</li>
                <li>Detailed nutritional analysis</li>
                <li>Weekly fresh stock updates</li>
                <li>Exclusive flavor previews</li>
            </ul>
            <button className="bg-cyan-200/20 text-neutral-950/80 text-center w-full rounded-lg h-10 cursor-pointer hover:bg-neutral-900 hover:text-neutral-50 transition-all">
                Order Now
            </button>
        </div>
    )
}