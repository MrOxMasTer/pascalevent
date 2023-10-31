import SvgMenu from "@/shared/assets/svg/SvgMenu";

export const Burger = () => {
  return (
    <button
      type="button"
      title="Кнопка открытия меню"
      className="rounded-[20px] w-[69px] h-[69px] bg-white/40"
    >
      <div className="rounded-[15px] flex justify-center items-center bg-white w-[49px] m-auto h-[49px] shadow-menu">
        <SvgMenu />
      </div>
    </button>
  );
};
