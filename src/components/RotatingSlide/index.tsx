import React from "react";
import "./style.css";
import reactLogo from "@/assets/images/react-logo.png";
import htmlLogo from "@/assets/images/html-logo.png";
import cssLogo from "@/assets/images/css-logo.jpg";
import gitLog from "@/assets/images/git-logo.png";
import jsLogo from "@/assets/images/js-logo.png";
import nextJsLogo from "@/assets/images/nextjs-logo.png";
import nodeJsLogo from "@/assets/images/node-js-logo.png";
import ubuntuLogo from "@/assets/images/ubuntu-logo.jpg";
import Image from 'next/image';

function RotatingSlide() {
  return (
    <div className="scope">
      <span className="class-1">
        <Image style={{ opacity: "0.9" }} src={reactLogo} alt="not found" />
      </span>
      <span className="class-2">
        <Image style={{ opacity: "0.9" }} src={htmlLogo} alt="not found" />
      </span>
      <span className="class-3">
        <Image style={{ opacity: "0.9" }} src={cssLogo} alt="not found" />
      </span>
      <span className="class-4">
        <Image style={{ opacity: "0.9" }} src={gitLog} alt="not found" />
      </span>
      <span className="class-5">
        <Image style={{ opacity: "0.9" }} src={jsLogo} alt="not found" />
      </span>
      <span className="class-6">
        <Image style={{ opacity: "0.9" }} src={nextJsLogo} alt="not found" />
      </span>
      <span className="class-7">
        <Image style={{ opacity: "0.9" }} src={nodeJsLogo} alt="not found" />
      </span>
      <span className="class-8">
        <Image style={{ opacity: "0.9" }} src={ubuntuLogo} alt="not found" />
      </span>
    </div>
  );
}

export default RotatingSlide;
