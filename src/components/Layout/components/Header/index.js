import { useState } from "react";

import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";

//thư viện để tạo chú thích khi chạm vào tool và dropDown(popper), tippy github(tippy js prop để biết thêm chi tiết).
import Tippy from '@tippyjs/react';//Cho phép tự custom.
import 'tippy.js/dist/tippy.css'; // optional

import Button from "~/components/Button";

import styles from './Header.module.scss';
import images from "~/assets/images";
import Menu from "~/components/Popper/Menu";
import { MENU_ITEMS, PROFILE_MENU_ITEMS } from "~/components/MenusItems";
import { InboxIcon, UploadIcon} from "~/components/Icons";
import Image from "~/components/Image";
import Search from "../Search";

const cx = classNames.bind(styles);//giúp cho việc thêm class được đẹp mắt hơn.

//tiny png de nen.

function Header() {
    const [isActionMenuVisible, setActionMenuVisible] = useState(true); 

    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'Language':
                console.log(1);
                break;
            default :
                console.log(0);
        }
    }

    const currentUser = true;

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Tiktok"/>
            </div>

            <Search></Search>

            <div className={cx('action')}> 
            {currentUser ? (
                <>
                    <Button btnIcon={ faPlus }>
                        Upload
                    </Button>

                    <div className={cx('action-btn-container')}>
                        <Tippy 
                            delay={[0, 200]}
                            content="Message"
                        >
                            <button className={cx('action-btn')}>
                               <UploadIcon className={cx('action-icon')}></UploadIcon>
                            </button>
                        </Tippy>
                        <Tippy
                            delay={[0, 200]}
                            content="Inbox"
                        >
                            <button className={cx('action-btn')}>
                                <InboxIcon className={cx('action-icon')}></InboxIcon>
                            </button>
                        </Tippy>
                    </div>
                </>
            ) : (
                <>
                    <Button btnIcon={ faPlus }>
                        Upload
                    </Button>
                    <Button primary>
                        Log in
                    </Button>

                </>
            )}
            
                <Menu
                    items={currentUser ? PROFILE_MENU_ITEMS : MENU_ITEMS}
                    onChange={handleMenuChange}
                >
                    {
                        currentUser ? (
                                <Image 
                                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/eeefaa3b6a7cda9195cb452b9e73a6e0.jpeg?biz_tag=tiktok_user.user_cover&lk3s=30310797&x-expires=1711814400&x-signature=wU7xqfhEk%2BcDztRki0K824CzZc0%3D"
                                    className={cx('user-avatar')} 
                                    alt="Nguyen van A" 
                                />    
                        ) : (
                            <div className={cx('action-menu')}>
                                <FontAwesomeIcon
                                    className={cx('action-menu-icon')}
                                    icon={faEllipsisVertical}
                                />
                            </div> 
                        )
                    }
                </Menu>
            </div>
        </div>
    </header>;
}


export default Header;