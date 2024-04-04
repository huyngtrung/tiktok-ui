import classNames from 'classnames/bind';
import styles from "./Search.module.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner} from "@fortawesome/free-solid-svg-icons";

import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountsItem from "~/components/AccountItem";
import { SearchIcon } from "~/components/Icons";

import { useState, useEffect, useRef } from 'react';
import { useDebounce } from '~/components/hooks';


const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

//Kĩ thuật debounced:
    //Cách hoạt động:
    const debounced = useDebounce(searchValue, 500);//Truyền giá trị muốn delay và thời gian delay.

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            })
    }, [debounced]);

    const handleSearchValue = (event) => {
        event.target.value = event.target.value.trimStart();//ngăn dấu cách.
        setSearchValue(event.target.value);
    }

    const handleDelete = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }

    const handleHideResult = () => {
        setShowResult(false);
    }

    const handleShowResult = () => {
        setShowResult(true);
    }

    return ( 
        <HeadlessTippy
            interactive
            visible = {showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-tittle')}>
                            Accounts
                        </h4>
                        {searchResult.map((result) => {
                            return(
                                <AccountsItem
                                    key={result.id}
                                    data={result}
                                ></AccountsItem>
                            )
                        })}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input 
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search" 
                    spellCheck={false} 
                    onChange={handleSearchValue}
                    onFocus={handleShowResult}
                />
                {!!searchValue && !loading &&(
                    <button 
                        className={cx('clear')}  
                        onClick={handleDelete}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
               
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')}>
                    <SearchIcon></SearchIcon>
                </button> 
            </div>
        </HeadlessTippy>
     );
}

export default Search;