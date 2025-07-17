"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"

export default function TransitionLink({href, children, props}) {
    const router = useRouter()
    return(
        <>
            <Link 
            href={href}
            {...props}
            onClick={(e) =>{
                e.preventDefault()
                router.push(href)
            }}
            >
                {children}
            </Link>
        </>
    )
}