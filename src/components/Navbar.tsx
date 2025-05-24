import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"

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
                            <Link href="/" className="py-2 px-4 bg-gray-200 hover-bg-gray-300 text-black rounded-lg ring-gray-400">
                                Pricing
                            </Link>
                        </>
                    </div>
                </div>


            </MaxWidthWrapper>

        </nav>
    )
}