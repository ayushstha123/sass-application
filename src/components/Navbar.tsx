import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server"
import {  ArrowRight } from "lucide-react"

export const NavBar = () => {
    return (
        <nav className="sticky h-14 inset-x-14 top-0 z-30 w-full border-b border-gray-300 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href='/' className="flex z-40 font-semibold">
                        talkpdf
                    </Link>
                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            <Link href="/" className="py-2 px-4 bg-gray-200 hover:bg-gray-300 text-black rounded-lg ring-gray-400">
                                Pricing
                            </Link>
                            <LoginLink className="py-2 px-4 bg-gray-200 hover:bg-gray-300 text-black rounded-lg ring-gray-400">
                                Sign In
                            </LoginLink>
                            <RegisterLink className="py-2 px-4 bg-neutral-800 flex items-center gap-4 hover:bg-neutral-800 text-white rounded-lg ring-gray-400">
                               Get Started <ArrowRight/>
                            </RegisterLink>
                        </>
                    </div>
                </div>


            </MaxWidthWrapper>

        </nav>
    )
}