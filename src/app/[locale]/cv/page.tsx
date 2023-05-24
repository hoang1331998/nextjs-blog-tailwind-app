"use client";
import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

export default function CV() {
  return (
    <div className="bg-[#191923] py-[20px]">
      <div className="container mx-auto">
        <div className="flex">
          <Sidebar />
          <Content />
        </div>
      </div>
    </div>
  );
}
