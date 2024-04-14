import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import * as searchServices from '~/Services/searchService';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountsItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons/Icons';

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
    const debounced = useDebounce(searchValue, 500); //Truyền giá trị muốn delay và thời gian delay.

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounced);
            setSearchResult(result);

            setLoading(false);
        };
        fetchApi();

        //sử dụng dấu . trên github để xem code.
        //?q=${encodeURIComponent(searchValue)}&type=less`
        // request.get(`users/search`, {
        //     params: {
        //         q: debounced,
        //         type: 'less'
        //     }
        // })
        //     .then((res) => {
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     })
    }, [debounced]);

    const handleSearchValue = (event) => {
        const searchValue = event.target.value;

        // event.target.value = event.target.value.trimStart();//ngăn dấu cách nếu là kí tự đầu tiên.
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleDelete = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleShowResult = () => {
        setShowResult(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <HeadlessTippy
                appendTo={() => document.body}
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-tittle')}>Accounts</h4>
                            {searchResult.map((result) => {
                                return <AccountsItem key={result.id} data={true}></AccountsItem>;
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
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleDelete}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={handleSubmit}>
                        <SearchIcon></SearchIcon>
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
