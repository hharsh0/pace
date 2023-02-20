
function Steps({count}) {
  return (
    <>
      <div>
        <h2 className="sr-only">Steps</h2>

        <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100 dark:after:bg-gray-800">
          <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
            <li className="flex items-center bg-white dark:bg-background-color p-2">
              <span
                className={`h-6 w-6 ${
                  count === 1 ? "bg-blue-600 text-white" : "bg-white text-black"
                } rounded-full  text-center text-[10px] font-bold leading-6`}
              >
                1
              </span>

              <span className="hidden sm:ml-2 sm:block"> Details </span>
            </li>

            <li className="flex items-center bg-white dark:bg-background-color p-2">
              <span
                className={`h-6 w-6 rounded-full ${
                  count === 2 ? "bg-blue-600 text-white" : "bg-white text-black"
                } text-center text-[10px] font-bold leading-6`}
              >
                2
              </span>

              <span className="hidden sm:ml-2 sm:block"> Address </span>
            </li>

            <li className="flex items-center bg-white dark:bg-background-color p-2">
              <span
                className={`h-6 w-6 rounded-full text-center ${
                  count === 3 ? "bg-blue-600 text-white" : "bg-white text-black"
                } text-[10px] font-bold leading-6 dark:text-white`}
              >
                3
              </span>

              <span className="hidden sm:ml-2 sm:block"> Payment </span>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default Steps