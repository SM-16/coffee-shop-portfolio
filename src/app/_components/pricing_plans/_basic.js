import Link from "next/link"

export default function Basic(){
    return(
        <div className="w-80 border border-b-amber-100/50 border-amber-300/20 rounded-lg p-4 backdrop-blur-xs bg-amber-100/10">
            <h2 className="text-center pt-4 font-extrabold text-3xl font-serif">
                Basic
            </h2>
            <h3 className="text-xl text-center font-serif">
                $19
            </h3>
            <ul className="w-full text-justify list-image-[url(/images/check-bronce.png)] list-inside *:mb-2.5 h-fit p-5 text-md">
                <li>12-pack variety selection</li>
                <li>Free delivery on orders $50+</li>
                <li>Nutritional information included</li>
                <li>Monthly newsletter</li>
            </ul>
            <button className="bg-amber-200/20 text-neutral-950/80 text-center w-full rounded-lg h-10 cursor-pointer hover:bg-neutral-900 hover:text-neutral-50 transition-all">
                Order Now
            </button>
        </div>
    )
}