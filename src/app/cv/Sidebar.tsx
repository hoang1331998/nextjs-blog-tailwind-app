import { Image, Progress } from "antd";
import {

  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import React from "react";
import MySkill from "./components/MySkill";

function Sidebar() {

  const handleDownloadCv = () => {
    const fileUrl = '/cv.pdf'; 

    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = '_blank';
    link.download = 'VuXuanHoang.pdf';
    link.click();
  }
  return (
    <div className="w-full bg-[#292730] cv-page-height rounded-tl-[10px] rounded-l-[10px] ">
      {/* avatar */}
      <div className="w-full flex flex-col items-center justify-center avatar-block">
        <Image
          src={`https://i.ibb.co/QcYmr8T/07fa15ac5e2cb172e83d.jpg`}
          preview={{
            maskClassName: "rounded-full",
          }}
          alt="avatar"
          className="rounded-full !w-[100px] !h-[100px] object-cover"
        />
        <h1 className="text-white font-bold text-[20px] mt-[6px] text-center">
          Vu Xuan Hoang
        </h1>
        <h3 className="text-[#7a7a7a] text-center">Front-end Developer</h3>
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
          <div className="line w-full h-[1px] bg-[#7a7a7a] my-[25px]">
            &nbsp;
          </div>
          <div>
            <p className="text-white">English: </p>
            <Progress
              strokeColor={{
                "0%": "rgb(251 191 36)",
                "100%": "#87d068",
              }}
              percent={60}
            />
          </div>
          <div className="mt-[15px]">
            <p className="text-white">Communication Skill:</p>
            <Progress
              strokeColor={{
                "0%": "rgb(251 191 36)",
                "100%": "#87d068",
              }}
              percent={80}
            />
          </div>
          <div className="line w-full h-[1px] bg-[#7a7a7a] my-[25px]">
            &nbsp;
          </div>
          <MySkill />
        </div>

        {/* end skill */}
        {/* link */}
        <div className="cv-link w-full h-full bg-[#292730] cv-link rounded-bl-[10px] flex flex-col  justify-center items-center gap-[20px]">
          <div onClick={handleDownloadCv} className="w-[max-content] px-[10px] cursor-pointer rounded-[5px] text-center border border-[#7a7a7a] hover:bg-white hover:transition-all ease-in-out duration-300">
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
