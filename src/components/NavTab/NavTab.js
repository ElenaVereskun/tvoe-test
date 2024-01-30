import { React } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchButton from './../../images/search-button.svg';
import HomeButton from './../../images/home-button.svg';
import MoviesButton from './../../images/movies-button.svg';
import TvButton from './../../images/tv-button.svg';
import LikesButton from './../../images/likes-button.svg';
import AccountButton from './../../images/account-button.svg';

function NavTab() {
    return (
        <div className='navtab'>
            <Link href="/search" className='navtab__search'>
                <Image src={SearchButton} alt='поиск' />
            </Link>
            <Link href="/" className='navtab__home'>
                <Image src={HomeButton} alt='домой' />
            </Link>
            <Link href="/movies" className='navtab__movies'>
                <Image src={MoviesButton} alt='фильмы' />
            </Link>
            <Link href="/tv" className='navtab__tv'>
                <Image src={TvButton} alt='тв'/>
            </Link>
            <Link href="/likes" className='navtab__likes'>
                <Image src={LikesButton} alt='избранное'/>
            </Link>
            <Link href="/account" className='navtab__account'>
                <Image src={AccountButton} alt='аккаунт'/>
            </Link>
        </div>
    );
}
export default NavTab;