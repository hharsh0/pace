import { useEffect,useState } from 'react'
import Steps from '@/components/Steps';

function Register() {

    const [count, setCount] = useState(1);


    const scrollintoView = () => { 
        const element = document.getElementById('form')
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
    }
    useEffect(() => {
        scrollintoView();
    }, [])
  
  const handleClick = () => {
    if (count > 3) {
      return
    }
    else if (count < 3) {
      setCount(count + 1)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleClickPrev = () => {
    if (count < 1) {
      return
    }
    else if (count > 1) {
      setCount(count - 1)
    }
  }


  return (
    <>
      <section id="form" className="mt-2">
        <Steps count={count} />
        <form onSubmit={handleSubmit} class="mt-8 grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <label
              for="FirstName"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              First Name
            </label>

            <input
              type="text"
              id="FirstName"
              name="first_name"
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label
              for="LastName"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Last Name
            </label>

            <input
              type="text"
              id="LastName"
              name="last_name"
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>

          <div class="col-span-6">
            <label
              for="Email"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Email
            </label>

            <input
              type="email"
              id="Email"
              name="email"
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label
              for="Password"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Password
            </label>

            <input
              type="password"
              id="Password"
              name="password"
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label
              for="PasswordConfirmation"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Password Confirmation
            </label>

            <input
              type="password"
              id="PasswordConfirmation"
              name="password_confirmation"
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>

          {/* 
          <div class="col-span-6">
            <p class="text-sm text-gray-500 dark:text-gray-400">
              By creating an account, you agree to our 
              <a href="#" class="text-gray-700 underline dark:text-gray-200">
                terms and conditions
              </a>
              and
              <a href="#" class="text-gray-700 underline dark:text-gray-200">
                privacy policy{" "}
              </a>
              .
            </p>
          </div> */}

          <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              onClick={handleClickPrev}
              class={`${
                count === 1 && "cursor-not-allowed opacity-75"
              } inline-block shrink-0 duration-500 hover:scale-110 bg-[#2CF0FE] px-12 py-3 text-sm font-medium dark:text-black notched transition focus:outline-none`}
            >
              {count >= 1 && "Prev"}
            </button>
            <button
              onClick={handleClick}
              class="inline-block shrink-0 duration-500 hover:scale-110 bg-[#2CF0FE] px-12 py-3 text-sm font-medium dark:text-black notched transition focus:outline-none"
            >
              {count != 3 && "Next"}
              {count == 3 && "Submit"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register