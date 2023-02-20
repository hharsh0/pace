

function Button({children}) {
  return (
    <>
      <button
        class="inline-block shrink-0 duration-500 hover:scale-110 bg-black text-white dark:bg-[#2CF0FE] px-12 py-3 text-sm font-medium dark:text-black notched transition focus:outline-none"
      >
        {children}
      </button>
    </>
  );
}

export default Button