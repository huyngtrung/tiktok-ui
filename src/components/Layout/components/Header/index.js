import { useEffect, useState } from "react";

import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus, faEllipsisVertical, faL, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay, faCircleQuestion, faMessage} from "@fortawesome/free-regular-svg-icons";

//thư viện để tạo chú thích khi chạm vào tool và dropDown(popper), tippy github(tippy js prop để biết thêm chi tiết).
import Tippy from '@tippyjs/react';//Cho phép tự custom.
import HeadlessTippy from "@tippyjs/react/headless";
import 'tippy.js/dist/tippy.css'; // optional

import Button from "~/components/Button";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import styles from './Header.module.scss';
import images from "~/assets/images";
import AccountsItem from "~/components/AccountItem";
import Menu from "~/components/Popper/Menu";
import { MENU_ITEMS, PROFILE_MENU_ITEMS } from "~/components/MenusItems";
import { InboxIcon, SearchIcon, UploadIcon} from "~/components/Icons";
import Image from "~/components/Image";

const cx = classNames.bind(styles);//giúp cho việc thêm class được đẹp mắt hơn.

//tiny png de nen.

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const [isActionMenuVisible, setActionMenuVisible] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

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
            <HeadlessTippy
                interactive
                visible = {searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-tittle')}>
                                Accounts
                            </h4>
                            <AccountsItem></AccountsItem>
                            <AccountsItem></AccountsItem>
                            <AccountsItem></AccountsItem>
                            <AccountsItem></AccountsItem>
                            <AccountsItem></AccountsItem>
                            <AccountsItem></AccountsItem>
                            <AccountsItem></AccountsItem>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder="Search" spellCheck={false}/>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button className={cx('search-btn')}>
                        <SearchIcon></SearchIcon>
                    </button> 
                </div>
            </HeadlessTippy>

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