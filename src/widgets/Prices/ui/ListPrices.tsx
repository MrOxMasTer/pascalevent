import { listPrices } from "../constants/listPrices";
import { ListCardPrices } from "./ListICardPrices";

export const ListPrices = () => {
  return (
    <ul className="grid grid-cols-2 grid-rows-[repeat(auto, 1fr)] gap-x-[15px] gap-y-5 pt-[56px]">
      {listPrices.map(({ price, src, title }) => (
        <ListCardPrices key={title} price={price} src={src} title={title} />
      ))}
    </ul>
  );
};
