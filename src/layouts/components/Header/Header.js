import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../../assets/images";

import { Link } from "react-router-dom";
import config from "../../../config";
import Search from "../Search";
const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const currentUser = true;
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        console.log(menuItem);
        break;
      default:
    }
  };
  const userMenu = [
    {
      title: "View profile",
      to: "/@hoaa",
    },
    {
      title: "Get coins",
      to: "/coins",
    },
    {
      title: "Settings",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];
  return (
    <header className={cx("wrapper")}>
      <Link to={config.routes.home} className={cx("logo-link")}>
        <img src={images.logo} alt="Tiktok" />
      </Link>
       {/* <Search /> */}
      
    
    </header>
  );
}
export default Header;
