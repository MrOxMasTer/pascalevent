import SvgAirCooler from "@svg/air-cooler-1.svg?url";
import SvgCurve from "@svg/curve-1.svg?url";
import SvgExtractor from "@svg/extractor-11.svg?url";
import SvgFan from "@svg/fan-21.svg?url";
import SvgHumidity from "@svg/humidity-21.svg?url";
import SvgVentilation from "@svg/ventilation-1.svg?url";
import { FC, SVGProps } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const view: { [value: string]: FC<SVGProps<SVGElement> & SVGRProps> } = {
  curve: SvgCurve,
  fan: SvgFan,
  extractor: SvgExtractor,
  humidity: SvgHumidity,
  airCooler: SvgAirCooler,
  ventilation: SvgVentilation,
};

const SvgChoice = ({
  value,
  className,
}: {
  value: string;
  className: string;
}) => {
  const SvgView = view[value];
  return <SvgView className={className} />;
};

export default SvgChoice;
