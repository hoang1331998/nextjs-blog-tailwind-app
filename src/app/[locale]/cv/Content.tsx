import ProjectCard from "@/components/Card/ProjectCard";
import CounterFarm from "@/components/CounterFarm";
import Footer from "@/components/Footer";
import RotatingSlide from "@/components/RotatingSlide";
import { useTranslations } from "next-intl";
import React from "react";

function Content() {
  const t = useTranslations("CV");
  return (
    <div className="cv-content w-full cv-page-height bg-slate-700 overflow-y-auto py-[20px] px-[30px] no-scrollbar rounded-r-[10px] pb-0">
      {/* banner */}
      <div className="cv-banner w-full p-[50px]">
        <h3 className="text-white text-[40px] font-black">
          Discover my Amazing <br /> Art Space!
        </h3>
        <p className="text-white font-code mt-[20px]">
          {`<`}
          <span className="text-amber-400">code</span>
          {`>`} I build web application. {`</`}
          <span className="text-amber-400">code</span>
          {`>`}
        </p>
        <div className="bg-amber-400 w-[max-content] px-[30px] py-[10px] cursor-pointer mt-[30px] border border-amber-400 hover:border-[#fff] transition-all">
          {" "}
          <span className="text-black text-[12px] uppercase font-semibold">
            {t("connect-now")}
          </span>
        </div>
      </div>
      <RotatingSlide />
      {/* end banner */}
      {/* exp */}
      <div className="flex flex-wrap items-center justify-between">
        <div className="sm:w-full md:w-[50%] lg:w-[25%]">
          <CounterFarm num={`10+`} label="Years Experience" />
        </div>
        <div className="sm:w-full md:w-[50%] lg:w-[25%] ">
          <CounterFarm num={`7`} label="Completed Projects" />
        </div>
        <div className="sm:w-full md:w-[50%] lg:w-[25%] ">
          <CounterFarm num={`30+`} label="Happy Customers" />
        </div>
      </div>

      <div className="w-full grid grid-cols-3 gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      {/* end exp */}
      <Footer />
    </div>
  );
}

export default Content;
