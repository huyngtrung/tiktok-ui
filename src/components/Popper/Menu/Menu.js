import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Tippy from '@tippyjs/react/headless'; //Cho phép tự custom.
import Button from '~/components/Button/Button';

import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn, ...passProps }) {
    const [history, setHistory] = useState([{ data: items }]);
    const currentMenu = history[history.length - 1];

    const renderItems = () => {
        return currentMenu.data.map((value, index) => {
            const isParent = !!value.children; //Khong co children => undefined khong thi true.

            return (
                <MenuItem
                    key={index}
                    data={value}
                    onClick={() => {
                        if (isParent) {
                            setHistory((preHistory) => [...preHistory, value.children]);
                        } else {
                            onChange(value.title);
                        }
                    }}
                ></MenuItem>
            );
        });
    };

    return (
        <Tippy
            interactive
            delay={[100, 300]}
            // offset={[10, 10]}
            trigger="mouseenter"
            hideOnClick={false}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-container')} tabIndex="-1" {...attrs}>
                    <div className={cx('menu-wrapper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prevHistory) => prevHistory.slice(0, prevHistory.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menuItems-container')}>{renderItems()}</div>
                    </div>
                </div>
            )}
            onHide={() => setHistory((prevHistory) => prevHistory.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
