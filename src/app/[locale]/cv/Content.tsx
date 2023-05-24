import RotatingSlide from "@/components/RotatingSlide";
import React from "react";

function Content() {
  return (
    <div className="cv-content w-full cv-page-height bg-slate-700 overflow-y-auto py-[20px] px-[30px] no-scrollbar rounded-r-[10px]">
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
        <div className="bg-amber-400 w-[max-content] px-[30px] py-[10px] cursor-pointer mt-[30px]">
          {" "}
          <span className="text-black uppercase">EXPLORE NOW</span>
        </div>
      </div>
      {/* end banner */}
      <RotatingSlide />
    </div>
  );
}

export default Content;
