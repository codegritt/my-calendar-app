"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";
import Content1 from "./Content1";
import About from "./About";
import Features from "./Features";
import Contact from "./Contact";
import Calendar from "./Calendar";

const Header = () => {
  const [tab, setTab] = useState("Home");
  return (
    <>
      <div className={styles.showBox}>
        <div className="header-1 flex flex-col bg-[#FFCE32]">
          <nav className="bg-[#1D63FF] px-4 py-2 flex flex-col lg:flex-row lg:items-center flex-shrink-0">
            <div className="flex justify-between items-center lg:mr-32">
              <a href="https://flowbite.com" className="flex items-center">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/calendar-8242564-6604955.png"
                  className="mr-3 h-14 sm:h-9"
                  alt="Flowbite Logo"
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  Gokul's Calendar App
                </span>
              </a>
              <button
                className="border border-white px-2 py-1 rounded text-white opacity-50 hover:opacity-75 lg:hidden"
                id="navbar-toggle"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div className="hidden lg:flex flex-grow" id="navbar-collapse">
              <ul className="flex flex-col mt-3 mb-1 lg:flex-row lg:mx-auto lg:mt-0 lg:mb-0">
                <li>
                  <button
                    onClick={() => setTab("Home")}
                    className={
                      tab === "Home"
                        ? "block text-white py-2 md:mx-2"
                        : "block text-gray-300 py-2 md:mx-2"
                    }
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setTab("About")}
                    className={
                      tab === "About"
                        ? "block text-white py-2 md:mx-2"
                        : "block text-gray-300 py-2 md:mx-2"
                    }
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setTab("Features")}
                    className={
                      tab === "Features"
                        ? "block text-white py-2 md:mx-2"
                        : "block text-gray-300 py-2 md:mx-2"
                    }
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setTab("Contact")}
                    className={
                      tab === "Contact"
                        ? "block text-white py-2 md:mx-2"
                        : "block text-gray-300 py-2 md:mx-2"
                    }
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setTab("App")}
                    className={
                      tab === "App"
                        ? "block text-white py-2 md:mx-2"
                        : "block text-gray-300 py-2 md:mx-2"
                    }
                  >
                    App
                  </button>
                </li>
              </ul>
              <div className="flex my-3 lg:my-0">
                <button className="bg-transparent hover:bg-white text-white hover:text-gray-900 py-1 px-3 rounded border border-solid border-white mr-2">
                  Login
                </button>
                <button className="bg-transparent hover:bg-white text-white hover:text-gray-900 py-1 px-3 rounded border border-solid border-white mr-2">
                  Sign Up
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {tab === "Home" && (
        <div className={styles.showBox}>
          <Content1 />
        </div>
      )}

      {tab === "About" && (
        <div className={styles.showBox}>
          <About />
        </div>
      )}
      {tab === "Features" && (
        <div className={styles.showBox}>
          <Features />
        </div>
      )}
      {tab === "Contact" && (
        <div className={styles.showBox}>
          <Contact />
        </div>
      )}
      {tab === "App" && (
        <div className={styles.showBox}>
          <Calendar />
        </div>
      )}
    </>
  );
};

export default Header;
