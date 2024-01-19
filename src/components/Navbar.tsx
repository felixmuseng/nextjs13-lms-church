"use client";

import Link from "next/link"
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return(
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <h2 className="text-2xl text-cyan-600 font-bold ">LOGO</h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image src="/close.svg" width={30} height={30} alt="logo" />
                ) : (
                  <Image
                    src="/hamburger-menu.svg"
                    width={30}
                    height={30}
                    alt="logo"
                    className="focus:border-none active:border-none"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`w-full md:block md:w-auto ${
              navbar ? '' : 'hidden'
            }`}
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <Link href="/notes" onClick={() => setNavbar(!navbar)}>
                  Notes
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <Link href="/calendar" onClick={() => setNavbar(!navbar)}>
                  Calendar
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <Link href="/setting" onClick={() => setNavbar(!navbar)}>
                  Setting
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}