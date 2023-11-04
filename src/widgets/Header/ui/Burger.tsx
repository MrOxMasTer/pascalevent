"use client";

import SvgMenu from "@svg/Menu.svg?url";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Burger = () => {
  const { get } = useSearchParams();
  const menu = get("menu") || "false";

  return (
    <Link
      href={{ query: { menu: menu === "false" ? "true" : "false" } }}
      title="Кнопка открытия меню"
      className="place-content-center rounded-[20px] w-[69px] h-[69px] relative bg-white/40 z-[99] flex"
    >
      <div className="rounded-[15px] flex justify-center items-center bg-white w-[49px] m-auto h-[49px] shadow-menu">
        <SvgMenu />
      </div>
    </Link>
  );
};

export default Burger;
