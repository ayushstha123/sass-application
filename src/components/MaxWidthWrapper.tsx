import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const MaxWidthWrapper = ({
    className,
    children
}: {
    className?: string

    //ReactNode is a type in React that represents anything that can be rendered. Think of it as a very flexible container for various renderable things within your React component tree.
    children: ReactNode
}) => {
    return (
        <div className={cn("mx-auto max-w-screen-xl w-full px-2.5 md:px-20",className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper
