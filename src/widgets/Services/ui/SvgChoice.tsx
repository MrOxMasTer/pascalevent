import SvgConditioner from "@svg/air-conditioner-1.svg?url";
import SvgAirCooler from "@svg/air-cooler-1.svg?url";
import SvgAirFilter from "@svg/air-filter-1.svg?url";
import SvgCeiling from "@svg/ceiling-1.svg?url";
import SvgCondenser from "@svg/condenser-1.svg?url";
import SvgCurve from "@svg/curve-1.svg?url";
import SvgExtractor from "@svg/extractor-11.svg?url";
import SvgFan from "@svg/fan-21.svg?url";
import SvgHumidity from "@svg/humidity-21.svg?url";
import SvgSplit from "@svg/split-1.svg?url";
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
  conditioner: SvgConditioner,
  airFilter: SvgAirFilter,
  ceiling: SvgCeiling,
  condenser: SvgCondenser,
  split: SvgSplit,
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
