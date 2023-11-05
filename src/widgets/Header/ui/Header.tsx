"use client";

import { useMatchMedia } from "@/shared/hooks/useMatchMedia";
import { Logo } from "@/shared/ui/Logo";

import dynamic from "next/dynamic";

const DynamicBurger = dynamic(() => import("./Burger"));

export const Header = () => {
  const { isMobileS, isTablet } = useMatchMedia();

  return (
    <header className="w-full absolute">
      <h1 className="visually-hidden">Pascal Vent</h1>
      <div className="container pt-3.5 flex items-center justify-between relative min-h-[83px]">
        <Logo
          aria-label="логотип-ссылка на главную страницу"
          className="block"
          href="/"
        />
        {isMobileS && !isTablet ? <DynamicBurger /> : null}
      </div>
    </header>
  );
};
