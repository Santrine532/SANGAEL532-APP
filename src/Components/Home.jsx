import React from "react";

//Homepage Component
function Home() {
  return (
    <div className="flex flex-wrap items-center justify-center mb-6">
      <div className="w-full p-6 m-auto bg-blue rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-blue-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-black-700 justify-center underline uppercase  ">
          HOME PAGE
        </h1>
        <section class="bg-center bg-no-repeat bg-[url('https://cf.bstatic.com/xdata/images/hotel/max1024x768/81080373.jpg?k=4b6d5ffffa4155844ead44de67483f448ad5c79100a904e97f6d76c22fceef27&o=&hp=1')] bg-gray-700 bg-blend-multiply">
          <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
             
            </h1>
            
            <div class="flex flex-col space-y-4 sm:flex-row space-y-0 sm:space-x-4 text-right">
              <a
                href="#"
                class="inline-flex justify-center  py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-white-900"
              >
                LOGIN
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
