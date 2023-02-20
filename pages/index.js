
import Button from "@/components/Button";
import { DecoderText } from "@/components/DecoderText"
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="">
        <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="place-self-center mr-auto lg:col-span-7">
            <div className="mb-6">
              <DecoderText
                className="max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-7xl dark:text-white sci-fi"
                text="PACE 2023"
              />
            </div>
            <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link
              href="/register"
              className="inline-flex notched justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center bg-black dark:text-black dark:bg-[#2CF0FE] text-white hover:scale-110 duration-500"
            >
              Register
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/sports.png" alt="mockup" />
          </div>
        </div>
      </section>
    </>
  );
}
