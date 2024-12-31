"use client";
import React, { useEffect, useState, useCallback } from "react";
import { Menu, MenuProps, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

type MenuItem = Required<MenuProps>["items"][number];


const items: MenuItem[] = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "General",
    key: "general",
  },
  {
    label: "Business",
    key: "business",
  },
  {
    label: "Entertainment",
    key: "entertainment",
  },
  {
    label: "Health",
    key: "health",
  },
  {
    label: "Science",
    key: "science",
  },
  {
    label: "Sports",
    key: "sports",
  },
  {
    label: "Technology",
    key: "technology",
  },
];

const HeaderMenu = ({
  onCategoryChange,
  defaultKey,
}: {
  onCategoryChange: (category: string) => void;
  defaultKey: string;
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [current, setCurrent] = useState(defaultKey);

  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 
  const handleClick = useCallback(
    (e: { key: string }) => {
      setCurrent(e.key);
      onCategoryChange(e.key);
      setIsDrawerOpen(false); 
    },
    [onCategoryChange]
  );

  return (
    <div id="header-menu">
      <div className={styles.customMenu}>
        {!isMobile ? (
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        ) : (
          <>
            <div
              onClick={() => setIsDrawerOpen(true)}
              className="bg-white text-black w-full border-t border-black"
            >
              <div className="mx-4 flex items-center justify-between h-16">
                <div className="text-xl font-bold">MENU</div>
                <MenuOutlined />
              </div>
            </div>
            <Drawer
              open={isDrawerOpen}
              closable
              onClose={() => setIsDrawerOpen(false)}
              placement="left"
            >
              <Menu
                onClick={handleClick}
                selectedKeys={[current]}
                mode="inline"
                items={items}
                rootClassName={styles.customMenuLeft}
              />
            </Drawer>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderMenu;

