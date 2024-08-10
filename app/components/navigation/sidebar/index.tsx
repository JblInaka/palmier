"use client"
import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
      <div className="w-64 h-full bg-white p-5">
        <button className="text-right mb-4" onClick={toggle}>
          Fermer
        </button>
        <ul className="flex flex-col gap-y-5 text-black text-base font-bold">
          <li className="hover:text-green-600">
            <Link href="/home" onClick={toggle}>
              <p>Acceuil</p>
            </Link>
          </li>
          <li className="hover:text-green-600">
            <Link href="/apropos" onClick={toggle}>
              <p>À Propos</p>
            </Link>
          </li>
          <li className="hover:text-green-600">
            <Link href="/projet" onClick={toggle}>
              <p>Projets</p>
            </Link>
          </li>
          <li className="hover:text-green-600">
            <Link href="/contact" onClick={toggle}>
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
