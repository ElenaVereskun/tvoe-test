import { React } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import BlueBeetle from '@/src/images/posterBlueBeetle.png'
import HomeGame from '@/src/images/posterHomeGame.png'
import Salut7 from '@/src/images/posterSalut7.png'
import CatchMe from '@/src/images/posterCatchMe.png'

function NewMovies() {
    return (
        <section className='new-movies'>
            <h1 className='new-movies__title'>Новинки</h1>
            <ul className='new-movies__items'>
                <li className='new-movies__item'>
                    <Image src={BlueBeetle} alt='синий жук' />
                    <caption className='new-movies__caption'>
                        <Link href='series' className='new-movies__caption-link'>Синий жук</Link>
                    </caption>
                </li>
                <li className='new-movies__item'>
                    <Image src={HomeGame} alt='домашняя игра' />
                    <caption className='new-movies__caption'>Домашняя ига</caption>
                </li>
                <li className='new-movies__item'>
                    <Image src={Salut7} alt='салют 7' />
                    <caption className='new-movies__caption'>Салют 7</caption>
                </li>
                <li className='new-movies__item'>
                    <Image src={CatchMe} alt='поймай меня' />
                    <caption className='new-movies__caption'>Поймай меня,если сможешь</caption>
                </li>
            </ul>
        </section>
    );
}
export default NewMovies;