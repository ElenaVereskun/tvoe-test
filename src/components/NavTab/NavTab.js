import { React } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/src/images/Logo.svg';
import SearchButton from '@/src/images/search-button.svg';
import HomeButton from '@/src/images/home-button.svg';
import MoviesButton from '@/src/images/movies-button.svg';
import TvButton from '@/src/images/tv-button.svg';
import LikesButton from '@/src/images/likes-button.svg';
import AccountButton from '@/src/images/account-button.svg';
import Arrow from '@/src/images/arrow.svg';

export default function NavTab() {
    return (
        <div className='navtab'>
            <Image src={Logo} alt='лого' className='navtab__logo' height={50} />
            <div className='navtab__container'>
                <Link href="/search" className='navtab__search'>
                    <Image className='navtab__item' src={SearchButton} alt='поиск' />
                </Link>
                <Link href="/" className='navtab__home'>
                    <Image className='navtab__item' src={HomeButton} alt='домой' />
                </Link>
                <Link href="/movies" className='navtab__movies'>
                    <Image className='navtab__item' src={MoviesButton} alt='фильмы' />
                </Link>
                <Link href="/tv" className='navtab__tv'>
                    <Image className='navtab__item' src={TvButton} alt='тв' /* style={{margin:'0px 5px 5px -5px'}} */ />
                </Link>
                <Link href="/likes" className='navtab__likes'>
                    <Image className='navtab__item' src={LikesButton} alt='избранное' />
                </Link>
                <Link href="/account" className='navtab__account'>
                    <Image className='navtab__item' src={AccountButton} alt='аккаунт' />
                </Link>
            </div>
            <Image src={Arrow} alt='стрелка' className='navtab__arrow' />
        </div>
    );
};