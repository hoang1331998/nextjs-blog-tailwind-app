import { Drawer } from "antd";
import React, { ReactElement, useState } from "react";

interface ProjectCardProps {
  children: ReactElement;
  title?: string;
  content: string | ReactElement;
}

function ProjectCard({ children, title, content }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div
        onClick={showDrawer}
        className="max-w-[600px] w-full bg-color-base h-[250px] px-[25px] py-[25px] cursor-pointer
         hover:shadow-2xl hover:scale-105 ease-in-out duration-300"
      >
        <h3 className="text-white text-[16px]">{title}</h3>
        <p className="text-[#7a7a7a] text[14p] mt-[20px] leading-6 line-text-fixed-4">
          {content}
        </p>
        <div className="tracking-[1.5px] text-amber-400 uppercase cursor-pointer font-bold mt-[20px] text-[14px]">
          View now {`>`}
        </div>
      </div>
      <Drawer
        title={title}
        placement="right"
        onClose={onClose}
        open={open}
      >
        {children}
      </Drawer>
    </div>
  );
}

export default ProjectCard;
