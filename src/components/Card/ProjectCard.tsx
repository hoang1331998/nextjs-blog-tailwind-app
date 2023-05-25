import React from "react";

function ProjectCard() {
  return (
    <div className="max-w-[400px] w-full bg-color-base h-[250px] px-[25px] py-[25px]">
      <h3 className="text-white text-[16px]">Web Development</h3>
      <p className="text-[#7a7a7a] text[14p] mt-[20px] leading-6 line-text-fixed-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse
        commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur
        doloribus.
      </p>
      <div className="tracking-[1.5px] text-amber-400 uppercase cursor-pointer font-bold mt-[20px] text-[14px]">View now {`>`}</div>
    </div>
  );
}

export default ProjectCard;
