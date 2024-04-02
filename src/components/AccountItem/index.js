import classNames from "classnames/bind";
import styles from "./AccountsItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountsItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avater')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/eeefaa3b6a7cda9195cb452b9e73a6e0.jpeg?biz_tag=tiktok_user.user_cover&lk3s=30310797&x-expires=1711814400&x-signature=wU7xqfhEk%2BcDztRki0K824CzZc0%3D" alt="Nguyen Van A"/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyễn văn a
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('usename')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountsItem;