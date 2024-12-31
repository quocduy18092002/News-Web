import { Menu, MenuProps } from "antd";
import React from "react";
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
  const handleClick = (e: { key: string }) => {
    onCategoryChange(e.key);
  };

  return (
    <div className="pb-10">
      <div className={styles.customMenu}>
        <Menu
          onClick={handleClick}
          defaultSelectedKeys={[defaultKey]} 
          items={items}
          mode="horizontal"
        />
      </div>
    </div>
  );
};

export default HeaderMenu;
