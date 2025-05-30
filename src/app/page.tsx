import Link from "next/link";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

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

      {/* value proposition section */}
      <div>
        <div className="relative isolate">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }} className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"/>

          </div>

          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"  >
                <Image
                src="/dashboard-preview.jpg"
                width={1364}
                height={860}
                quality={100}
                alt="Product design dashboard"
                className="rounded-md bg-white p-2 sm:p-8 w-full shadow-2xl ring-1 ring-gray-900/10"
                />
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </>
  );
}
