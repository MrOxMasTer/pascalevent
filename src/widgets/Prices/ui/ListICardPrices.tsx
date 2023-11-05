import Image from "next/image";

interface ListCardPricesProps {
  price: number;
  title: string;
  src: string;
}

const regexp = /(.{3})$/gi;

export const ListCardPrices = ({ price, src, title }: ListCardPricesProps) => {
  return (
    <li className="flex flex-col w-full justify-between h-[193px] relative overflow-hidden rounded-[25px]">
      <div className="absolute text-[15px] font-semibold text-grayAsparagus top-[15px] flex items-center justify-center min-h-[28px] w-[78%] min-w-[88px] text-center left-0 bg-blueRomance rounded-e-[10px]">
        от {price.toString().replace(regexp, " $&")}{" "}
        <span className="font-bold inline-block ms-1">₽</span>
      </div>
      <Image
        src={src}
        alt={title}
        className="w-full object-cover min-h-[50px] flex-[1_1_auto] bg-silver shadow-cardPriceImg"
        width="152"
        height="131"
      />
      <div className="text-deYork bg-white flex items-center px-[7px] mm:px-3.5 text-sm font-ruberoid min-h-[62px] flex-[0_0_auto] py-[11px]">
        {title}
      </div>
    </li>
  );
};
