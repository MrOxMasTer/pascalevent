import { BlockListServices } from "./BlockListServices";

export const Services = () => {
  return (
    <section>
      <div className="container mt-[4.375rem]">
        <h2 className="title-lv2 inline-block">
          Предоставляемые Услуги
          <span className="rounded-[1.5px] my-auto bg-deYork ms-[15px] h-0.5 inline-block min-w-[140px] max-w-max align-middle" />
        </h2>
        <div className="mt-[1.5625rem] text-gray leading-6 text-sm pb-[1.875rem]">
          <p>
            При разработке проекта предложим техническое решение оптимальное по
            соотношению цены и качества, оно идеально впишется в ваш дизайн, а
            также будет учитывать все ваши пожелания.
          </p>
          <br />
          <p>
            Монтаж выполняется опытными бригадами с соблюдением всех действующих
            технических норм, правил безопасности и стsрого по согласованному
            проекту.
          </p>
          <br />
          <p>
            Одинаково эффективно выполняем проектирование и монтаж на объектах
            любой сложности – от небольшой квартиры, до объектов со сложными
            технологическими процессами на основе действующей нормативной
            документации.
          </p>
        </div>
      </div>
      <BlockListServices />
    </section>
  );
};
