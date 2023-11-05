import SvgChoice from "./SvgChoice";

interface Service {
  text: string;
  value: string;
}

interface ListServiceProps {
  data: Service[];
}

export const ListService = ({ data }: ListServiceProps) => {
  return (
    <ul className="mt-[25px] grid px-1 mm:px-[15px] gap-[15px] leading-6 grid-rows-[repeat(auto-fit, 1fr)] text-grayAsparagus">
      {data.map((item) => (
        <li className="flex gap-[15px]" key={item.text}>
          <div className="w-[30px] h-[30px] bg-white rounded-[10px] flex-shrink-0 flex">
            <SvgChoice value={item.value} className="m-auto" />
          </div>
          <span className="mt-1">{item.text}</span>
        </li>
      ))}
    </ul>
  );
};
