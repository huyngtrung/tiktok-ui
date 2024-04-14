import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from '~/layouts/components/Header/Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical, faL } from '@fortawesome/free-solid-svg-icons';

//thư viện để tạo chú thích khi chạm vào tool và dropDown(popper), tippy github(tippy js prop để biết thêm chi tiết).
import Tippy from '@tippyjs/react'; //Cho phép tự custom.
import 'tippy.js/dist/tippy.css'; // optional
import { Link } from 'react-router-dom';

import config from '~/config';
import Button from '~/components/Button/Button';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu/Menu';
import { MENU_ITEMS, PROFILE_MENU_ITEMS } from '~/components/MenusItems/MenusItems';
import { InboxIcon, UploadIcon } from '~/components/Icons/Icons';
import Image from '~/components/Image/Image';
import Search from '../Search/Search';

const cx = classNames.bind(styles); //giúp cho việc thêm class được đẹp mắt hơn.

//tiny png de nen.

function Header() {
    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'Language':
                break;
            default:
                console.log(0);
        }
    };

    const currentUser = false;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-container')}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>

                <Search></Search>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button btnIcon={faPlus}>Upload</Button>

                            <div className={cx('action-btn-container')}>
                                <Tippy appendTo={document.body} delay={[0, 200]} content="Message">
                                    <button className={cx('action-btn')}>
                                        <UploadIcon className={cx('action-icon')}></UploadIcon>
                                    </button>
                                </Tippy>
                                <Tippy appendTo={document.body} delay={[0, 200]} content="Inbox">
                                    <button className={cx('action-btn')}>
                                        <InboxIcon className={cx('action-icon')}></InboxIcon>
                                    </button>
                                </Tippy>
                            </div>
                        </>
                    ) : (
                        <>
                            <Button btnIcon={faPlus}>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? PROFILE_MENU_ITEMS : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/eeefaa3b6a7cda9195cb452b9e73a6e0.jpeg?biz_tag=tiktok_user.user_cover&lk3s=30310797&x-expires=1711814400&x-signature=wU7xqfhEk%2BcDztRki0K824CzZc0%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen van A"
                            />
                        ) : (
                            <div className={cx('action-menu')}>
                                <FontAwesomeIcon className={cx('action-menu-icon')} icon={faEllipsisVertical} />
                            </div>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
