"use client"
import Link from "next/link"
import "./index.css"

import { usePathname } from "next/navigation"
export default function Navbar(){
    const pathname = usePathname()
    return(
        <div id="Navbar" className="flex lg:flex-row flex-col justify-center md:gap-16 gap-0 *:hover:text-slate-100 text-slate-300 transition-all *:p-5 py-10">
            {
                pathname == "/" 
                ? 
                <Link href={"/"} className="font-semibold text-slate-100">Home</Link>
                :
                <Link href={"/"}>Home</Link>
            }
            {
                pathname == "/about_us" 
                ? 
                <Link href={"/about_us"} className="font-semibold text-slate-100">About</Link>
                :
                <Link href={"/about_us"}>About</Link>
            }
            {
                pathname == "/pricing" 
                ? 
                <Link href={"/pricing"} className="font-semibold text-slate-100">Pricing</Link>
                :
                <Link href={"/pricing"}>Pricing</Link>
            }

        </div>
    )
}