
const login = () => {
    return <>
        <div id="root">
            <div className="cyb-app bg-white">
                <div className="app-content">
                    <div className="mx-auto max-w-[1800px] flex flex-1 cyb-content overflow-visible">
                        <div className="bg-white cyb-router h-screen">
                            <div className="w-full">
                                <div className="mx-auto box-content relative py-4 mb-8 max-w-screen-xl px-4 md:px-8">
                                    <div className="mx-auto w-full ">
                                        <img
                                            alt="Cybrary Logo"
                                            width={224}
                                            height={58}
                                            className="m-auto mb-8"
                                            src="https://images.ctfassets.net/kvf8rpi09wgk/6HtXDpiYT7GMU8yp0DS4Dy/5b42c213353afb410ac8e52e7db7c77f/cybrary_logo_black.svg?w=250"
                                        />
                                        <h1 className="my-8 text-2xl font-black text-center md:text-3xl lg:text-5xl">
                                            Sign In
                                        </h1>
                                        <div className="grid relative md:grid-cols-2">
                                            <div className="mx-auto w-full md:w-9/12">
                                                <p className="flex mb-6 text-xs">
                                                    Required fields are marked with an{" "}
                                                    <span className="ml-1 text-red-700">*</span>
                                                </p>
                                                <form
                                                    id="AUTH_EMAIL_LOGIN_FORM"
                                                    className=" mt-4 mb-4 dynamic-form text-base"
                                                >
                                                    <div className="mb-4">
                                                        <label
                                                            htmlFor="adb50366-f28a-443c-86c2-774f98a00773_email"
                                                            className="font-bold block text-gray-800 text-md mb-1"
                                                        >
                                                            Email<span className="ml-1 text-red-700">*</span>
                                                        </label>
                                                        <div className="w-full">
                                                            <input
                                                                id="adb50366-f28a-443c-86c2-774f98a00773_email"
                                                                className="appearance-none border bg-white rounded py-2 px-2 mb-1 focus:outline-none focus:border-blue-400 text-gray-700 w-full border-gray-300 placeholder-gray-600"
                                                                type="email"
                                                                autoComplete=""
                                                                aria-required="true"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="w-full">
                                                            <div className="flex py-2">
                                                                <div className="mb-0 flex items-start">
                                                                    <label htmlFor="adb50366-f28a-443c-86c2-774f98a00773_rememberMe">
                                                                        <input
                                                                            type="checkbox"
                                                                            id="adb50366-f28a-443c-86c2-774f98a00773_rememberMe"
                                                                            name="rememberMe"
                                                                            className="mr-2 mt-1 w-4 h-4 shrink-0"
                                                                            aria-required="false"
                                                                            defaultValue="false"
                                                                        />
                                                                        <span className="font-bold cursor-pointer">
                                                                            Remember Me
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="w-full">
                                                            <div>
                                                                <button
                                                                    id="AUTH_EMAIL_LOGIN_FORM_adb50366-f28a-443c-86c2-774f98a00773_submit"
                                                                    type="submit"
                                                                    className="leading-5 py-2.5 px-6 text-sm font-bold border-sm text-center bg-center items-center rounded-sm w-full grid justify-items-center flex bg-cyb-pink-500 text-white hover:bg-cyb-pink-600 cursor-pointer"
                                                                >
                                                                    <span>Next</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className="mt-4 mb-8 text-right">
                                                    <a
                                                        className="mb-4 text-cyb-pink-500 hover:text-black"
                                                        active="false"
                                                        href="/forgot-password"
                                                    >
                                                        Forgot your password?
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="flex flex-col justify-center items-center hidden absolute inset-y-0 my-3 md:flex"
                                                style={{ left: "calc(50% - 0.75rem)" }}
                                            >
                                                <div className="pb-4 divider-vertical" />
                                                <div className="py-4 divider-vertical-content">
                                                    <span className="text-gray-600 uppercase">or</span>
                                                </div>
                                                <div className="pt-4 divider-vertical" />
                                            </div>
                                            <div className="divider-horizontal flex leading-4 flex mt-2 mb-6 md:hidden">
                                                <div className="mx-4">
                                                    <span className="text-gray-600 uppercase">or</span>
                                                </div>
                                            </div>
                                            <div className="mx-auto w-full md:w-9/12">
                                                <div className="w-full mx-auto grid gap-2 ">
                                                    <button className="flex items-center py-3 px-4 bg-white hover:bg-gray-200 rounded-sm border-xs border-gray-400 border-solid">
                                                        <div className="flex justify-center items-center">
                                                            <span className="gg-logo" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="mx-auto w-40 text-sm text-left text-black">
                                                                Sign in with Google
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <button className="flex items-center py-3 px-4 bg-white hover:bg-gray-200 rounded-sm border-xs border-gray-400 border-solid">
                                                        <div className="flex justify-center items-center">
                                                            <span className="ap-logo" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="mx-auto w-40 text-sm text-left text-black">
                                                                Sign in with Apple
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <button className="flex items-center py-3 px-4 bg-white hover:bg-gray-200 rounded-sm border-xs border-gray-400 border-solid">
                                                        <div className="flex justify-center items-center">
                                                            <span className="ms-logo" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="mx-auto w-40 text-sm text-left text-black">
                                                                Sign in with Microsoft
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <button className="flex items-center py-3 px-4 bg-white hover:bg-gray-200 rounded-sm border-xs border-gray-400 border-solid">
                                                        <div className="flex justify-center items-center">
                                                            <span className="fb-logo" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="mx-auto w-40 text-sm text-left text-black">
                                                                Sign in with Facebook
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <button className="flex items-center py-3 px-4 bg-white hover:bg-gray-200 rounded-sm border-xs border-gray-400 border-solid">
                                                        <div className="flex justify-center items-center">
                                                            <span className="ld-logo" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="mx-auto w-40 text-sm text-left text-black">
                                                                Sign in with LinkedIn
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div>
                                                Don't have an account?
                                                <a
                                                    href="https://www.cybrary.it/register/?_gl=1*6xu7q0*_gcl_au*OTc0NzY1MjM1LjE3NDE3NTgwNTc.*_ga*MTg1ODE4Mzk4NS4xNzQxNzU4MDU3*_ga_7B7PNDDRRZ*MTc0MTg0MDkxNy4yLjEuMTc0MTg0NjM4MS4yNy4wLjIwNDc3Mjk5Nzk."
                                                    className="ml-2 text-cyb-pink-500 hover:text-black underline"
                                                    to="https://www.cybrary.it/register/?_gl=1*6xu7q0*_gcl_au*OTc0NzY1MjM1LjE3NDE3NTgwNTc.*_ga*MTg1ODE4Mzk4NS4xNzQxNzU4MDU3*_ga_7B7PNDDRRZ*MTc0MTg0MDkxNy4yLjEuMTc0MTg0NjM4MS4yNy4wLjIwNDc3Mjk5Nzk."
                                                    active="false"
                                                >
                                                    Sign Up »
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative bottom-0 px-4 pt-4 pb-8 md:p-4 app-footer">
                                <div className="flex flex-col justify-start ml-8 md:flex-row md:justify-center md:ml-0">
                                    <div className="mr-2 mb-2 text-xs text-gray-600 sm:mr-6 md:mb-0">
                                        © 2025 Cybrary
                                    </div>
                                    <ul className="flex flex-wrap items-center text-xs md:justify-center">
                                        <li className="mr-2 mb-2 sm:mr-6 md:mb-0">
                                            <a
                                                href="https://www.cybrary.it/terms-service/"
                                                to="https://www.cybrary.it/terms-service/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-black hover:text-cyb-pink-500 underline hover:underline"
                                                active="false"
                                            >
                                                Terms of Service
                                                <span className="sr-only">
                                                    This link opens a new window
                                                </span>
                                            </a>
                                        </li>
                                        <li className="mr-2 mb-2 sm:mr-6 md:mb-0">
                                            <a
                                                href="https://www.cybrary.it/privacy-policy/"
                                                to="https://www.cybrary.it/privacy-policy/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-black hover:text-cyb-pink-500 underline hover:underline"
                                                active="false"
                                            >
                                                Privacy Policy
                                                <span className="sr-only">
                                                    This link opens a new window
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed translate-x-[400%] transition-transform duration-300 ease-in-out z-[10000] h-screen w-4/5 md:w-1/2 xl:w-1/3 top-0 right-0">
                    <div className="fixed top-0 left-0 w-full h-screen bg-white shadow-[0_0px_30px_-5px_rgba(0,0,0,0.9)] ">
                        <div className="flex flex-col justify-between h-full">
                            <h2 className="p-4 text-xl font-bold ">Forum Discussions</h2>
                            <div className="mb-4 border-b-xs border-gray-400" />
                            <div className="block items-center w-full align-middle lg:flex">
                                <nav className="flex grow mx-8 space-x-8 lg:mx-16 lg:space-x-16">
                                    <button
                                        aria-pressed="true"
                                        aria-label="View Top Discussions content"
                                        className="inline-block text-sm px-1 w-full mb-4 border-b-4 pb-2  border-cyb-pink-500 font-semibold text-black"
                                    >
                                        Top Discussions
                                    </button>
                                    <button
                                        aria-pressed="false"
                                        aria-label="View New Discussions content"
                                        className="inline-block text-sm px-1 w-full mb-4 border-b-4 pb-2  border-slate-200 cursor-pointer"
                                    >
                                        New Discussions
                                    </button>
                                </nav>
                            </div>
                            <div className="bg-gray-200 px-4 py-2 rounded-full flex m-4">
                                <div className="shrink">
                                    <svg
                                        className="w-6 h-6 text-gray-600"
                                        fill="none"
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="none"
                                        focusable="false"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M26.6673 26.6663L19.5562 19.5552M21.9266 13.6293C21.9266 14.7188 21.712 15.7976 21.2951 16.8042C20.8781 17.8107 20.267 18.7253 19.4966 19.4957C18.7263 20.2661 17.8117 20.8772 16.8051 21.2941C15.7986 21.711 14.7198 21.9256 13.6303 21.9256C12.5408 21.9256 11.462 21.711 10.4554 21.2941C9.44887 20.8772 8.5343 20.2661 7.76391 19.4957C6.99353 18.7253 6.38243 17.8107 5.9655 16.8042C5.54857 15.7976 5.33398 14.7188 5.33398 13.6293C5.33398 11.429 6.20806 9.31879 7.76391 7.76294C9.31977 6.20708 11.43 5.33301 13.6303 5.33301C15.8306 5.33301 17.9408 6.20708 19.4966 7.76294C21.0525 9.31879 21.9266 11.429 21.9266 13.6293Z"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="grow pl-4">
                                    <input
                                        type="text"
                                        name="sitesearch"
                                        placeholder="Search Forums"
                                        className="border-0 bg-gray-200 outline-none focus:outline-none focus:border-0 text-gray-600 placeholder-gray-600 p-0 "
                                        aria-label="Search Cybrary, press enter to submit"
                                        autoComplete="off"
                                        defaultValue=""
                                    />
                                </div>
                            </div>
                            <div className="overflow-y-auto grow">
                                <div className="p-4 text-gray-600">
                                    <div className="flex flex-col justify-center items-center p-4 text-gray-600">
                                        <h3 id="" className="mb-4 text-lg font-bold">
                                            No topics found at this time!
                                        </h3>
                                        <a
                                            href="https://forums.cybrary.it"
                                            to="https://forums.cybrary.it"
                                            target="_blank"
                                            className="inline-block shrink-0 py-2.5 px-6 text-sm font-bold leading-5 text-center text-white hover:text-white rounded-sm bg-cyb-pink-500 hover:bg-cyb-pink-600"
                                            active="false"
                                        >
                                            Start a Discussion
                                            <span className="sr-only">This link opens a new window</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center my-2 w-full">
                                <a
                                    href="https://forums.cybrary.it"
                                    className="inline-block shrink-0 py-2.5 px-6 text-sm font-bold leading-5 text-center text-white hover:text-white rounded-sm bg-cyb-pink-500 hover:bg-cyb-pink-600 w-4/5"
                                    to="https://forums.cybrary.it"
                                    target="_blank"
                                    active="false"
                                >
                                    Ask the Community
                                    <span className="sr-only">This link opens a new window</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default login;