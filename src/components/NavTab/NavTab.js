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

function NavTab() {
    return (
        <div className='navtab'>
            <Image src={Logo} alt='лого' className='navtab__logo' height={50}/>
            <div className='navtab__container'>
                <Link href="/search" className='navtab__search'>
                    <Image src={SearchButton} alt='поиск' width={44}
                    height={44} />
                </Link>
                <Link href="/" className='navtab__home'>
                    <Image src={HomeButton} alt='домой'/>
                </Link>
                <Link href="/movies" className='navtab__movies'>
                    <Image src={MoviesButton} alt='фильмы' />
                </Link>
                <Link href="/tv" className='navtab__tv'>
                    <Image src={TvButton} alt='тв' width={44}
                    height={44}/>
                </Link>
                <Link href="/likes" className='navtab__likes'>
                    <Image src={LikesButton} alt='избранное' />
                </Link>
                <Link href="/account" className='navtab__account'>
                    <Image src={AccountButton} alt='аккаунт'/>
                </Link>
            </div>
            <Image src={Arrow} alt='стрелка' className='navtab__arrow' />
        </div>

    );
}
export default NavTab;