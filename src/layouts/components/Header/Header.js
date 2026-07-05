import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../../assets/images";
import Tippy from '@tippyjs/react';

import { Link } from "react-router-dom";
import config from "../../../config";
import Search from "../Search";
import { InboxIcon, MessageIcon, UploadIcon } from '../../../components/Icons';
import Button from '../../../components/Button';
import Menu from '../../../components/Popper/Menu';

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

                  <div className={cx('inner')}>
      <Link to={config.routes.home} className={cx("logo-link")}>
        <img src={images.logo} alt="Tiktok" />
      </Link>
      <Search />

      <div className={cx("actions")}>
        {currentUser ? (
          <>
            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
              <button className={cx("action-btn")}>
                <UploadIcon />
              </button>
            </Tippy>
            <Tippy delay={[0, 50]} content="Message" placement="bottom">
              <button className={cx("action-btn")}>
                <MessageIcon />
              </button>
            </Tippy>
            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
              <Link to={config.routes.chat} className={cx("action-btn")}>
                <InboxIcon />
                <span className={cx("badge")}>12</span>
              </Link>
            </Tippy>
          </>
        ) : (
          <>
            <Button text>Upload</Button>
            <Button primary>Log in</Button>
          </>
        )}

        <Menu
          items={currentUser ? userMenu : MENU_ITEMS}
          onChange={handleMenuChange}
        >
               <button className={cx('more-btn')}>

                            </button>
        </Menu>
      </div>
                  </div>

    </header>
  );
}
export default Header;
