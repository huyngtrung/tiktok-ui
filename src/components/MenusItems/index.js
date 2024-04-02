import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faKeyboard, faCoins, faVideo, faGear, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay, faCircleQuestion, faMoon, faUser, faBookmark, faLightbulb} from "@fortawesome/free-regular-svg-icons";
import { GetCoinIcon, LiveIcon, FavoritesIcon, ProfileIcon, LiveHubIcon, SettingsIcon, LanguageIcon, FeebbackIcon, KeyboardIcon, MoonIcon, LogOutIcon } from '../Icons';

import classNames from 'classnames/bind';
import styles from '~/components/Button/Button.module.scss'

const cx = classNames.bind(styles);
export const MENU_ITEMS = [
    {
        customIcon: <LiveHubIcon className={cx('customIcon')}></LiveHubIcon>,
        title: 'LIVE Creater Hub',
    },
    {
        customIcon: <LanguageIcon className={cx('customIcon')}></LanguageIcon>,
        title: 'English',
        children: {
            title: "Language",
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                    btnSmallWeight: 'btnSmallWeight',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                    btnSmallWeight: 'btnSmallWeight',
                },
            ]
        }
    },
    {
        customIcon: <FeebbackIcon  className={cx('customIcon')}></FeebbackIcon>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        customIcon: <KeyboardIcon  className={cx('customIcon')}></KeyboardIcon>,
        title: 'Keyboard shortcuts',
    },
    {
        customIcon: <MoonIcon  className={cx('customIcon')}></MoonIcon>,
        title: 'Dark mode',
    }
]

export const PROFILE_MENU_ITEMS = [
    {
        customIcon: <ProfileIcon className={cx('customIcon')}></ProfileIcon>,
        title: 'View profile',
    },
    {
        customIcon: <FavoritesIcon className={cx('customIcon')}></FavoritesIcon>,
        title: 'Favorites',
    },
    {
        customIcon: <GetCoinIcon className={cx('customIcon')}></GetCoinIcon>,
        title: 'Get Coins',
    },
    {
        customIcon: <LiveIcon className={cx('customIcon')}></LiveIcon>,
        title: 'Live Studio',
    },    
    {
        customIcon: <LiveHubIcon className={cx('customIcon')}></LiveHubIcon>,
        title: 'Live Creator HUB',
    },    
    {
        customIcon: <SettingsIcon className={cx('customIcon')}></SettingsIcon>,
        title: 'Settings',
    },    
    {
        customIcon: <LanguageIcon className={cx('customIcon')}></LanguageIcon>,
        title: 'English',
    },    
    {
        customIcon: <FeebbackIcon  className={cx('customIcon')}></FeebbackIcon>,
        title: 'Feebback and help',
    },    
    {
        customIcon: <KeyboardIcon  className={cx('customIcon')}></KeyboardIcon>,
        title: 'Keyboard shortcuts',
    },    
    {
        customIcon: <MoonIcon  className={cx('customIcon')}></MoonIcon>,
        title: 'Darkmode',
    },
    {
        customIcon: <LogOutIcon className={cx('customIcon')}></LogOutIcon>,
        title: 'Log out',
        borderTop: 'border-top'
    },
]