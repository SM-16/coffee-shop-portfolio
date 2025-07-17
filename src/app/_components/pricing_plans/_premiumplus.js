export default function PremiumPlus(){
    return(
        <div className="w-80 border border-b-amber-200/40 border-amber-500/40 rounded-lg p-4 backdrop-blur-xs bg-amber-400/10">
            <h2 className="text-center pt-4 font-extrabold text-3xl font-serif">
                Premium <span className="text-4xl">+</span>
            </h2>
            <h3 className="text-xl text-center font-serif">
                $99
            </h3>
            <ul className="w-full text-justify list-image-[url(/images/check-gold.png)] list-inside *:mb-2.5 h-fit p-5">
                <li>48-pack luxury selection</li>
                <li>Priority same-day delivery</li>
                <li>Personalized consultation</li>
                <li>Exclusive limited edition flavors</li>
                <li>VIP customer support</li>
                <li>Quarterly tasting events</li>
                <li>Custom branded packaging</li>
            </ul>
            <button className="bg-amber-200/20 text-neutral-950/80  text-center w-full rounded-lg h-10 cursor-pointer hover:bg-neutral-900 hover:text-neutral-50 transition-all">
                Order Now
            </button>
        </div>
    )
}