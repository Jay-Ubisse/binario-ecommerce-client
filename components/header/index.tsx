"use client";

import CloseIcon from "@mui/icons-material/Close";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NavLinks } from "./navlinks";

export const Header = () => {
  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerColor = scrollY > 0 ? "bg-red-800" : "bg-transparent";

  return (
    <>
      {/* Mobile Version */}
      <header className={`lg:hidden`}>
        <div
          className={`${
            scrollY > 80 ? "bg-slate-50" : "bg-transparent"
          } fixed top-0 p-2 flex justify-between w-full z-50`}
        >
          <Link href="/" className="w-fit">
            <h1>
              <span
                className={`${
                  scrollY > 80 ? "text-primary" : "text-white"
                }  mr-1 text-2xl py-1 font-medium`}
              >
                Binario
              </span>
              <span
                className={`${
                  scrollY > 80
                    ? "text-primary-foreground bg-primary"
                    : "text-primary bg-primary-foreground"
                } px-2 py-1 rounded-lg text-lg font-normal`}
              >
                Store
              </span>
            </h1>
          </Link>
          <div
            className={`${
              scrollY > 80 ? "text-primary" : "text-white"
            } w-fit mr-2  flex items-center gap-2`}
          >
            <LocalMallIcon />
            <MenuIcon onClick={() => setVisible(true)} />
          </div>
        </div>
        <nav
          className={`${
            visible ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row lg:justify-end w-screen lg:w-fit h-screen lg:h-full fixed lg:relative left-0 top-0 bg-slate-100 z-50 lg:bg-transparent`}
        >
          <div
            className="block lg:hidden w-fit ml-auto mt-4 mr-4"
            onClick={() => setVisible(false)}
          >
            <CloseIcon />
          </div>

          <div className="navbar-end mt-10 flex flex-col gap-3 w-[90%] mx-auto">
            <NavLinks />
          </div>
        </nav>
      </header>
      {/* Desktop version Version */}
      <header className="hidden lg:flex bg-transparent justify-between px-4">
        <Link href="/" className="w-32 h-48">
          <Image
            src={"/khaiya-logo.png"}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="Image"
          />
        </Link>
        <section className="flex gap-8 mt-10">
          <nav
            className={`flex justify-end w-fit h-fit bg-transparent text-white`}
          >
            <NavLinks />
          </nav>
          <div className="flex items-center w-ful h-fit gap-4 mt-2"></div>
        </section>
      </header>
    </>
  );
};
