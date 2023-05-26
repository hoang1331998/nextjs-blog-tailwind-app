import { Image, Progress } from "antd";
import {
  CheckOutlined,
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import React from "react";
function Sidebar() {
  return (
    <div className="w-[25%] bg-[#292730] cv-page-height rounded-tl-[10px] rounded-l-[10px] ">
      {/* avatar */}
      <div className="w-full flex flex-col items-center justify-center avatar-block">
        <Image
          preview={{
            maskClassName: "rounded-full",
          }}
          className="rounded-full !w-[100px] !h-[100px] object-cover"
          src="https://arter.bslthemes.com/wp-content/uploads/2020/09/face-1.jpg"
        />
        <h1 className="text-white font-bold text-[20px] mt-[6px] text-center">
          Vu Xuan Hoang
        </h1>
        <h3 className="text-[#7a7a7a] text-center">
          Front-end Developer 
        </h3>
      </div>
      {/* end-avatar */}

      {/* info */}
      <div className="cv-sidebar-info bg-[#20202a] cv-info-height flex flex-col justify-between rounded-bl-[10px]">
        {/* skill */}
        <div className="cv-skill py-[15px] px-[25px] cv-skill overflow-y-auto no-scrollbar">
          <div className="flex justify-between items-center">
            <span className="text-white text-[14px]">Residence:</span>
            <span className="text-[#7a7a7a] text-[14px]">Viet Nam</span>
          </div>
          <div className="flex justify-between items-center mt-[10px]">
            <span className="text-white text-[14px]">City:</span>
            <span className="text-[#7a7a7a] text-[14px]">Ha Noi</span>
          </div>
          <div className="flex justify-between items-center mt-[10px]">
            <span className="text-white text-[14px]">Age:</span>
            <span className="text-[#7a7a7a] text-[14px]">25</span>
          </div>
          <div className="line w-full h-[1px] bg-[#7a7a7a] my-[15px]">
            &nbsp;
          </div>
          <div className="flex justify-around">
            <div className="flex flex-col justify-center items-center">
              <Progress
                type="circle"
                percent={99}
                width={50}
                strokeColor={["#fbbf24"]}
              />
              <span className="text-white">Vietnamese</span>
            </div>{" "}
            <div className="flex flex-col">
              <Progress
                type="circle"
                percent={50}
                width={50}
                strokeColor={["#fbbf24"]}
              />
              <span className="text-white">English</span>
            </div>
          </div>
          <div className="line w-full h-[1px] bg-[#7a7a7a] my-[15px]">
            &nbsp;
          </div>
          <div className="skill-item flex items-center gap-[10px] py-[6px]">
            <span className="text-[#fbbf24] mb-[5px]">
              <CheckOutlined />
            </span>
            <span className="text-[#fbbf24] opacity-[0.8]">
              HTML, CSS, JavaScript
            </span>
          </div>
          <div className="skill-item flex items-center gap-[10px] py-[6px]">
            <span className="text-[#fbbf24] mb-[5px]">
              <CheckOutlined />
            </span>
            <span className="text-[#fbbf24] opacity-[0.8]">
              ReactJS, NextJS, VueJS, TypeScript
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

        {/* end skill */}
        {/* link */}
        <div className="cv-link w-full h-full bg-[#292730] cv-link rounded-bl-[10px] flex flex-col  justify-center items-center gap-[20px]">
          <div className="w-[max-content] px-[10px] cursor-pointer rounded-[5px] text-center border border-[#7a7a7a] hover:bg-white hover:transition-all ease-in-out duration-300">
            <span className="text-[#7a7a7a]">Download CV</span>
          </div>
          <div className="flex w-full items-center justify-center gap-[15px]">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/hvxun/"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined className="text-[#7a7a7a] hover:text-white cursor-pointer transition-all text-[20px]" />
            </a>
            <a
              target="_blank"
              href="https://github.com/hvxun98"
              rel="noopener noreferrer"
            >
              <GithubOutlined className="text-[#7a7a7a] hover:text-white cursor-pointer transition-all text-[20px]" />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/hvxun/"
              rel="noopener noreferrer"
            >
              <FacebookOutlined className="text-[#7a7a7a] hover:text-white cursor-pointer transition-all text-[20px]" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/hvxun/"
              rel="noopener noreferrer"
            >
              <InstagramOutlined className="text-[#7a7a7a] hover:text-white cursor-pointer transition-all text-[20px]" />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/hvxun/"
              rel="noopener noreferrer"
            >
              <TwitterOutlined className="text-[#7a7a7a] hover:text-white cursor-pointer transition-all text-[20px]" />
            </a>
          </div>
        </div>
        {/* end link */}
      </div>
      {/* end-info */}
    </div>
  );
}

export default Sidebar;
