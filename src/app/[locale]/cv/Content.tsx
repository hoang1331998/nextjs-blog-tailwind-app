
import CounterFarm from "@/components/CounterFarm";
import Footer from "@/components/Footer";
import RotatingSlide from "@/components/RotatingSlide";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import vtcLogo from "@/assets/images/vtconline-logo.png";
import rkLogo from "@/assets/images/rikkei-logo.png";
import SidebarResponsive from "./SidebarResponsive";
import MyProject from "./components/MyProject";

function Content() {
  const t = useTranslations("CV");
  return (
    <div className="cv-content w-full cv-page-height bg-slate-700 overflow-y-auto py-[20px] px-[30px] no-scrollbar rounded-r-[10px] pb-0">
      {/* banner */}
      <div className="sidebar-mobile">
        <SidebarResponsive />
      </div>
      <div className="cv-banner w-full p-[50px] flex justify-between relative">
        <div className="left relative">
          <h3 className="text-white text-[40px] font-black cv-title">
            <TypeAnimation
              sequence={[`Welcome to my page!`, 1000, "Have a good day!", 1000]}
              speed={40}
              repeat={Infinity}
            />
          </h3>

          <p className="text-white font-code mt-[30px] text-code">
            {`<`}
            <span className="text-amber-400">code</span>
            {`>`} I build web application. {`</`}
            <span className="text-amber-400">code</span>
            {`>`}
          </p>
          <div className="bg-amber-400 w-[max-content] px-[30px] py-[10px] cursor-pointer absolute bottom-0 border border-amber-400 hover:border-[#fff] transition-all">
            <span className="text-black text-[12px] uppercase font-semibold">
              {t("connect-now")}
            </span>
          </div>
        </div>
        <div className="slider w-[200px] h-[200px] flex items-end absolute bottom-[40px] right-[70px]">
          <RotatingSlide />
        </div>
      </div>

      {/* end banner */}
      {/* exp */}
      <div className="exp-com flex flex-wrap items-center justify-between">
        <div className="exp-item sm:w-full sm:text-center md:w-[50%] lg:w-[25%]">
          <CounterFarm num={`3+`} label="Years Experience" />
        </div>
        <div className="exp-item sm:w-full md:w-[50%] lg:w-[25%] ">
          <CounterFarm num={`10+`} label="Completed Projects" />
        </div>
        <div className="exp-item sm:w-full md:w-[50%] lg:w-[25%] ">
          <CounterFarm num={`30+`} label="Happy Customers" />
        </div>
      </div>

      <p className="text-white text-[25px] font-bold mb-[10px]">My projects</p>
     <MyProject />
      <p className="text-white text-[25px] font-bold mb-[10px] mt-[20px]">
        My partners
      </p>
      <div className="flex items-center gap-[50px] justify-center cv-partner">
        <Image
          className="w-[200px] h-[150px] object-contain rounded-[5px] opacity-[0.8]"
          src={vtcLogo}
          alt="partner"
        />
        <Image
          className="w-[200px] h-[150px] object-contain rounded-[5px] opacity-[0.8]"
          src={rkLogo}
          alt="partner"
        />
      </div>
      {/* end exp */}
      <Footer />
    </div>
  );
}

export default Content;
