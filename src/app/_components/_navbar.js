"use client"
import Link from "next/link"
import TransitionLink from "./_transisitonLink"
import "./index.css"

import { usePathname } from "next/navigation"
export default function Navbar(){
    const pathname = usePathname()
    return(
        <div id="Navbar" className="flex lg:flex-row flex-col justify-center md:gap-16 gap-0 *:hover:text-slate-100 text-slate-300 transition-all *:p-5 py-10">
            {
                pathname == "/" 
                ? 
                <TransitionLink children={"Home"} href={"/"} className="font-semibold text-slate-100"/>
                :
                <TransitionLink children={"Home"} href={"/"} />
            }
            {
                pathname == "/about_us" 
                ? 
                <TransitionLink children={"About"} href={"/about_us"} className="font-semibold text-slate-100"/>
                :
                <TransitionLink children={"About"} href={"/about_us"} />
            }
            {
                pathname == "/pricing" 
                ? 
                <TransitionLink children={"Pricing"} href={"/pricing"} className="font-semibold text-slate-100"/>
                :
                <TransitionLink children={"Pricing"} href={"/pricing"} />
            }

        </div>
    )
}