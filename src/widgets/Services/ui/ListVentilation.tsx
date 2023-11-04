import { listVentilation } from "../constants/listVentilation";
import SvgChoice from "./SvgChoice";

export const ListVentilation = () => {
  return (
    <ul className="mt-[25px] grid px-[15px] gap-[10px] leading-6 text-grayAsparagus">
      {listVentilation.map((item) => (
        <li className="flex gap-[15px]" key={item.text}>
          <div className="w-[30px] h-[30px] bg-white rounded-[10px] flex-shrink-0 flex">
            <SvgChoice value={item.value} className="m-auto" />
          </div>
          {item.text}
        </li>
      ))}
    </ul>
  );
};
