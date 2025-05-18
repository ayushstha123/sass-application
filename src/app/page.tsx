import MaxWidthWrapper from "../components/MaxWidthWrapper";

export default function Home() {
  return (
    <div>
      <MaxWidthWrapper className="mb-12 nt-28 sm:mt-40 flex flex-col items-center justify-between text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border bg-white border-neutral-200 px-7 py-2 shadow-md backdrop-blur-md transition-all hover:border-neutral-300 hover:bg-white/50">
        <p className="text-sm font-semibold text-neutral-700">
          Hello how are yu
        </p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
