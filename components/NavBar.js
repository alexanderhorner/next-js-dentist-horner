"use client"
import { useRouter } from 'next/router'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from 'next/image'
import Logo from '@/public/tooth.svg'
// import HamburgerMenu from "./HamburgerMenu"
import Telephone from '@/public/phone.svg'
import LanguageSwitcher from '@/components/LanguageSwitcher';
import english from '@/public/english.svg'


export default function NavBar() {
  const [animationState, setAnimationState] = useState(0);

  const locale = useRouter().locale;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setAnimationState(0)
      } else if (window.scrollY < 200) {
        setAnimationState(1);
      } else if (window.scrollY < 500) {
        setAnimationState(2);
      } else {
        setAnimationState(3);
      }
    };

    handleScroll() // Call it once to set the initial state
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-16">
      <nav
        className={`${
          [
            "relative transition-none", 
            "relative transition-none opacity-0", 
            "transition-all fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-lg opacity-0 pointer-events-none", 
            "transition-all fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-lg opacity-100 pointer-events-all"
          ][animationState]
        } duration-300`}
      >
        <div className="mx-auto max-w-screen-xl px-5 md:px-8">
          <ul className="flex gap-3 justify-end items-center h-16 text-neutral-600 text-sm lg:text-base whitespace-nowrap">
            <li className="mr-auto">
              <Link className="h-8 block" href="/">
                <Image src={Logo} alt="Zahn Logo" className="h-full w-auto" />
              </Link>
            </li>
            <li className="">
              {locale === "de" && <LanguageSwitcher simple={true} noborders={true}><Image src={english} alt="Englisch" className="h-6 w-auto" /></LanguageSwitcher>}
              {locale === "en" && <LanguageSwitcher simple={true}>Deutsch</LanguageSwitcher>}  
            </li>
            {/* <li className="hidden sm:block">
              <Link href="/contact">Kontakt</Link>
            </li>
            <li className="hidden sm:block">
              <Link className="whitespace-nowrap hidden sm:block" href="/services">
                Dienste
              </Link>
            </li> */}
            {/* <li className={animationState === 0 && "hidden"}> */}
            <li className={animationState === 0 ? "hidden" : undefined}>
            <Link
              className="flex items-center whitespace-nowrap bg-indigo-600 px-3 py-2 rounded-lg text-white hover:bg-indigo-800 transition-colors"
              href="tel:+499182902020"
            >
              <Image src={Telephone} alt="Telephone" className="h-5 w-auto" />
              <span className="ml-2">+49 9182 902020</span>
            </Link>
            </li>
            {/* <li>
              <HamburgerMenu />
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
