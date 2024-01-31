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
                    <p className='new-movies__caption'>
                        <Link href='series' className='new-movies__caption-link'>Синий жук</Link>
                    </p>
                </li>
                <li className='new-movies__item'>
                    <Image src={HomeGame} alt='домашняя игра' />
                    <p className='new-movies__caption'>Домашняя игра</p>
                </li>
                <li className='new-movies__item'>
                    <Image src={Salut7} alt='салют 7' />
                    <p className='new-movies__caption'>Салют 7</p>
                </li>
                <li className='new-movies__item'>
                    <Image src={CatchMe} alt='поймай меня' />
                    <p className='new-movies__caption'>Поймай меня,если сможешь</p>
                </li>
            </ul>
        </section>
    );
}
export default NewMovies;