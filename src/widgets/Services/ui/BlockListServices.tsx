"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ListService } from "./ListService";

import Ventilation from "#/public/image/21b00694232eea82b1dd71100c5dd4f1.jpeg";
import Conditioning from "#/public/image/8d402d5154977e18414e54189b9c0602.jpeg";
import { listConditioning } from "../constants/listConditioning";
import { listVentilation } from "../constants/listVentilation";

export const BlockListServices = () => {
  const { get } = useSearchParams();
  const typeService = get("typeService") || "ventilation";
  const isVentilation = typeService === "ventilation";

  return (
    <div
      className="bg-blueRomance p-[0.9375rem] min-h-[659px] rounded-[50px] flex flex-col"
      aria-label="Список услуг: "
    >
      <div className="w-full grid grid-cols-2 grid-rows-[65px]">
        <Link
          className="btn-services rounded-ss-[40px]"
          data-valid={!isVentilation ? "this" : "null"}
          href={{ query: { typeService: "conditioning" } }}
          scroll={false}
        >
          Кондиционирование
        </Link>
        <Link
          className="btn-services rounded-se-[40px]"
          data-valid={isVentilation ? "this" : "null"}
          href={{ query: { typeService: "ventilation" } }}
          scroll={false}
        >
          Система Вентиляции
        </Link>
      </div>
      <ListService data={isVentilation ? listVentilation : listConditioning} />
      <Image
        className="mt-auto mx-auto w-full h-[170px] rounded-[50px] shadow-servicesImg object-cover"
        src={isVentilation ? Ventilation : Conditioning}
        alt={
          isVentilation
            ? "Вентиляция на потолке с большими железными трубами"
            : "Возле окна белый внешний блок сплит-системы"
        }
      />
    </div>
  );
};
