import { Button, Drawer } from "antd";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { MenuUnfoldOutlined } from "@ant-design/icons";

const SidebarResponsive: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div onClick={showDrawer} className="text-white text-[25px] mb-2 cursor-pointer">
        <MenuUnfoldOutlined/>
      </div>

      <Drawer
        placement={"left"}
        className="sidebar-mb"
        closable={false}
        width={300}
        onClose={onClose}
        open={open}
        key={"left"}
      >
        <Sidebar />
      </Drawer>
    </>
  );
};

export default SidebarResponsive;
