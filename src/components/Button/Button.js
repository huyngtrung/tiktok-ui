import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    customIcon = false,
    primary = false,
    outline = false,
    small = false,
    large = false,
    btnIcon = false,
    btnIconBig = false,
    btnSmallWeight = false,
    borderTop = false,
    menu = false,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        customIcon,
        primary,
        outline,
        menu,
        small,
        large,
        btnSmallWeight,
        borderTop,
    });

    const iconClasses = cx('icon', {
        btnIcon,
        btnIconBig,
    });

    return (
        <Comp className={classes} {...props}>
            {customIcon}
            {btnIcon && <FontAwesomeIcon className={cx('iconClasses')} icon={btnIcon} />}{' '}
            {/* Thêm FontAwesomeIcon nếu btnIcon được cung cấp */}
            {btnIconBig && <FontAwesomeIcon className={cx('iconClassesBig')} icon={btnIconBig} />}{' '}
            {/* Thêm FontAwesomeIcon nếu btnIcon được cung cấp */}
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
