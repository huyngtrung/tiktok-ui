import classNames from "classnames/bind";
import styles from "./HeaderOnly.module.scss"

const cx = classNames.bind(styles);

function Header() {
    return <header className={cx('wrapper')}>
    <div className={cx('inner')}>
        123
    </div>
</header>;
}

export default Header;