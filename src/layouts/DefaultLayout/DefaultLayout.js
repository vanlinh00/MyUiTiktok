import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <h2>Header</h2>
      <div className={cx("content")}>{children}</div>
      <h2>Footer</h2>
    </div>
  );
}
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
