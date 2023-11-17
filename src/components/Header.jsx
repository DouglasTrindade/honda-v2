import Link from "next/link";
import React, { useState } from "react";

export const Header = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const tabs = [
    {
      id: 1,
      tabLink: "Home",
      content: "test",
    },
  ];

  return (
    <>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <div className="flex-auto">
            <img
              src="red-logo-honda.png"
              alt="logo da honda"
              height={115}
              width={115}
            />
          </div>
          <Link
            href={"/"}
            className={`text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6`}
          >
            home
          </Link>

          <Link
            href={"/design"}
            className={`border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6`}
          >
            Design
          </Link>

          <Link
            href={"/tecnologia"}
            className={`border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6`}
          >
            Multiconectividade & Tecnologia
          </Link>

          <Link
            href={"/conforto"}
            className={`border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6`}
          >
            Conforto
          </Link>
        </div>
      </nav>
    </>
  );
};
