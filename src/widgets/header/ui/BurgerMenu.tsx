"use client";

import { X } from "lucide-react";

interface BurgerMenuProps {
  openBurger: boolean;
  toggleMenu: () => void;
}

export function BurgerMenu({ openBurger, toggleMenu }: BurgerMenuProps) {

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 md:hidden ${
          openBurger
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      <aside
        className={`
                    fixed top-0 left-0 h-full w-[80%] bg-white shadow-xl p-6 
                    transition-transform duration-300 lg:hidden
                    ${openBurger ? "translate-x-0" : "-translate-x-full"}
                `}
      >
        <div className="flex justify-end mb-6">
          <button onClick={toggleMenu}>
            <X size={28} />
          </button>
        </div>

        <div className="border-b border-gray-300 mb-6"></div>

        <nav className="flex flex-col gap-4 text-lg text-stone-500">
          <h2 className="text-2xl text-stone-950 ">8 (800) 250-02-00</h2>
          <h2>TF@kristall-traking.ru</h2>
          <a href="#" className="hover:text-red-600 transition">
            Как происходити доставка
          </a>
          <a href="#" className="hover:text-red-600 transition">
            Отследить
          </a>
        </nav>
      </aside>
    </>
  );
}
