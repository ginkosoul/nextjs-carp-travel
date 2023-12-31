"use client";
import { Karantina } from "next/font/google";
import logo from "@public/assets/icons/logo.svg";
import Image from "next/image";
import { Link } from "react-scroll";
import { useState } from "react";
import { navMenu } from "@constants/navMenu";

const karantina = Karantina({ weight: "400", subsets: ["latin"] });

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((pv) => !pv);
  return (
    <header className="py-9 container flex justify-between items-center">
      <div>
        <Image src={logo} alt="logo image" width={51} />
        <span className={`${karantina.className} text-sm tracking-[0.125em]`}>
          CarpTravel
        </span>
      </div>
      <nav className="hidden md:flex xl:gap-8">
        {navMenu.map(({ label, link }) => (
          <Link
            key={label}
            to={link}
            className="text-sm tracking-widest px-3 py-1.5 cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            {label}
          </Link>
        ))}
      </nav>
      <button
        className="py-2 pl-4 outline-none text-sm uppercase rounded-full md:hidden tracking-widest"
        type="button"
        onClick={toggleMenu}
      >
        menu
      </button>
      {isMenuOpen && <Menu onClose={toggleMenu} />}
    </header>
  );
}

function Menu({ onClose }) {
  return (
    <div className="min-h-screen backdrop-blur-xl flex flex-col items-center justify-center p-20 mx-auto gap-12 bg-menu w-screen md:hidden fixed top-0 left-0">
      <button
        className="py-2 px-4 outline-none absolute top-8 right-1 text-sm uppercase rounded-full"
        type="button"
        onClick={onClose}
      >
        close
      </button>
      {navMenu.map(({ label, link }) => (
        <Link
          key={label}
          to={link}
          onClick={onClose}
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

export default NavBar;
