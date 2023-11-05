import { ListPrices } from "./ListPrices";

export const Prices = () => {
  return (
    <section className="pb-[70px]">
      <h2 className="title-lv2 mt-[70px] mx-[16px] inline-block flex-wrap">
        Комплексное решение по монтажу и{" "}
        <span className="h-0.5 bg-deYork align-middle inline-block min-w-[106px]" />{" "}
        Вентиляции под ключ
      </h2>
      <div className="bg-prices bg-repeat pb-[25px]">
        <div className="container">
          <ListPrices />
        </div>
      </div>
    </section>
  );
};
