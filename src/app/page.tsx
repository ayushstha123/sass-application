import Link from "next/link";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <> 
      <MaxWidthWrapper className="mb-12 nt-28 sm:mt-40 flex flex-col items-center justify-between text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border bg-white border-neutral-200 px-7 py-2 shadow-md backdrop-blur-md transition-all hover:border-neutral-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-neutral-700">
            PDF Talk is now public!
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Chat with your <span className="text-blue-600">Documents</span> in seconds
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime reiciendis quis quod. Itaque laboriosam saepe nihil hic facilis atque quas?
        </p>
        <Link href='/dashboard' target="_blank" className="bg-black px-4 py-2 flex items-center justify-center rounded-md text-white mt-3">
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>
    </>
  );
}
