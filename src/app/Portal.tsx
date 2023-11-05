"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProviderProps {
  children: React.ReactNode;
  selector: string;
}

//? Убрать портал?

export default function Portal({ children, selector }: PortalProviderProps) {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);

    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
}
