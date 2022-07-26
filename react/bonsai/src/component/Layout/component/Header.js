import styles from "./Header.module.scss";

const $ = styles;

function Header() {
  return (
    <div className={$.wrapper}>
      <div className={$.inner}>navbar</div>
    </div>
  );
}

export default Header;
