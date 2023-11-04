"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function MenuPage() {
  const { get } = useSearchParams();
  const menu = get("menu") || "false";

  useEffect(() => {
    if (menu === "true") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menu]);

  return (
    <>
      {menu === "true" ? (
        <div className="bg-blueRomance absolute top-0 z-10 w-full h-screen">
          MENU PAGE
        </div>
      ) : null}
    </>
  );
}
