"use client";

import { Menu } from "lucide-react";
import { useHeaderMenu } from "../model/useHeaderMenu";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderContacts } from "./HeaderContcts";
import { HeaderNav } from "./HeaderNav";
import { BurgerMenu } from "./BurgerMenu";

export default function Header() {
  const { open, toggleMenu } = useHeaderMenu();

  return (
    <>
      <header className="fixed bg-stone-50 top-0 left-0 w-full z-40 md:grid md:grid-cols-3 flex justify-between items-center py-6 shadow-lg px-2 md:px-7 lg:px-9">
        <div className="flex items-center gap-4">
          <button onClick={toggleMenu} className="lg:hidden">
            <Menu size={28} />
          </button>

          <HeaderContacts />
        </div>

        <HeaderLogo />

        <div className="flex justify-end text-base items-center gap-6 align-center">
          <HeaderNav />

          <a
            href="#track"
            className="block bg-stone-100 p-3 rounded-md hover:bg-stone-300 transition-colors"
          >
            Отследить посылку
          </a>
        </div>
      </header>

      <BurgerMenu openBurger={open} toggleMenu={toggleMenu} />
    </>
  );
}
