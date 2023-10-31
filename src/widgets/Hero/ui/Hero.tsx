import SvgPhone from "@/shared/assets/svg/SvgPhone";
import SvgPin from "@/shared/assets/svg/SvgPin";
import SvgTroetogo from "@/shared/assets/svg/SvgTroetogo";
import { Button } from "@/shared/ui/Button";

export const Hero = () => {
  return (
    <section className="background-hero grid pb-[296px]">
      <div className="container">
        <h2 className="text-grayAsparagus font-ruberoid text-[2rem] capitalize mm:text-[2.25rem] leading-[2.875rem] mt-[148px] font-semibold text-end">
          чистый воздух
          <span className="inline-block bg-deYork h-0.5 w-[85px] mm:w-[93px] align-middle me-[15px]" />
          вместе с
          <span className="text-deYork uppercase font-bold">
            <br />
            pascal vent
          </span>
        </h2>
        <div className="flex mt-[1.875rem] gap-[15px]">
          <SvgTroetogo className="shrink-0 mt-[11px]" />
          <span className="text-amulet font-proxima text-[1.125rem] leading-[1.75rem]">
            Проектирование, поставка и монтаж систем вентиляции и
            кондиционирования
          </span>
        </div>
        <div className="flex gap-3 font-proxima text-xanadu mt-[45px]">
          <SvgPin />
          Московский регион, Москва
        </div>
        <div className="mm:flex grid mt-[30px] justify-between text-xanadu font-proxima text-[14px]">
          <div className="flex gap-3">
            <SvgPhone className="shrink-0" />+ 7 492 373 63 31
          </div>
          <div className="flex gap-3 mt-4 mm:mt-0">
            <SvgPhone className="shrink-0" />+ 7 424 367 89 29
          </div>
        </div>
        <Button className="mt-[45px] font-ruberoid w-full h-[5.625rem]">
          оставить заявку
        </Button>
      </div>
    </section>
  );
};
