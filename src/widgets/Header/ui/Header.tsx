import { Logo } from "@/shared/ui/Logo";
import { Burger } from "./Burger";

export const Header = () => {
  return (
    <header className="absolute w-full bg-transparent z-10">
      <h1 className="visually-hidden">Pascal Vent</h1>
      <div className="container mt-3.5 flex items-center justify-between">
        <Logo
          aria-label="логотип-ссылка на главную страницу"
          className="block"
          href="/"
        />
        <Burger />
      </div>
    </header>
  );
};
