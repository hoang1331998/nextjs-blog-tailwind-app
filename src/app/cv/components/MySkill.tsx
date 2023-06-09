import { CheckOutlined } from "@ant-design/icons";
import React from "react";

function MySkill() {
  return (
    <div>
      <div className="skill-item flex items-center gap-[10px] py-[6px]">
        <span className="text-[#fbbf24] mb-[5px]">
          <CheckOutlined />
        </span>
        <span className="text-[#fbbf24] opacity-[0.8]">
          HTML, CSS, JavaScript, TypeScript
        </span>
      </div>
      <div className="skill-item flex items-center gap-[10px] py-[6px]">
        <span className="text-[#fbbf24] mb-[5px]">
          <CheckOutlined />
        </span>
        <span className="text-[#fbbf24] opacity-[0.8]">
          ReactJS, NextJS, VueJS
        </span>
      </div>
      <div className="skill-item flex items-center gap-[10px] py-[6px]">
        <span className="text-[#fbbf24] mb-[5px]">
          <CheckOutlined />
        </span>
        <span className="text-[#fbbf24] opacity-[0.8]">
          Ant Design, Material UI, Bootstrap, Tailwind, Sass/Scss, ...
        </span>
      </div>
      <div className="skill-item flex items-center gap-[10px] py-[6px]">
        <span className="text-[#fbbf24] mb-[5px]">
          <CheckOutlined />
        </span>
        <span className="text-[#fbbf24] opacity-[0.8]">
          NodeJS, Mysql, MongoDB
        </span>
      </div>
      <div className="skill-item flex items-center gap-[10px] py-[6px]">
        <span className="text-[#fbbf24] mb-[5px]">
          <CheckOutlined />
        </span>
        <span className="text-[#fbbf24] opacity-[0.8]">
          Server Configuration: nginx, hosting, domain
        </span>
      </div>
      <div className="skill-item flex items-center gap-[10px] py-[6px]">
        <span className="text-[#fbbf24] mb-[5px]">
          <CheckOutlined />
        </span>
        <span className="text-[#fbbf24] opacity-[0.8]">Git</span>
      </div>
      <div className="skill-item flex items-center gap-[10px] py-[6px]">
        <span className="text-[#fbbf24] mb-[5px]">
          <CheckOutlined />
        </span>
        <span className="text-[#fbbf24] opacity-[0.8]">
          Blockchain knowledge
        </span>
      </div>
      <div className="skill-item flex items-center gap-[10px] py-[6px]">
        <span className="text-[#fbbf24] mb-[5px]">
          <CheckOutlined />
        </span>
        <span className="text-[#fbbf24] opacity-[0.8]">Window, Linux</span>
      </div>
    </div>
  );
}

export default MySkill;
