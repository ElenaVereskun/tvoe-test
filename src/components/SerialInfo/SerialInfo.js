import { React } from 'react';

export default function SerialInfo() {
    return (
        <section className='serial-info'>
            <h1 className='serial-info__title'>Информация</h1>
            <ul className='serial-info__items'>
                <li className='serial-info__item'>
                    <h2 className='serial-info__item-title'>Премьера в мире</h2>
                    <p className='serial-info__item-text'>31 октября 2022</p>
                </li>
                <li className='serial-info__item'>
                    <h2 className='serial-info__item-title'>Страна</h2>
                    <p className='serial-info__item-text'>США</p>
                </li>
                <li className='serial-info__item'>
                    <h2 className='serial-info__item-title'>Язык аудиодорожки</h2>
                    <p className='serial-info__item-text'>Rus, Eng</p>
                </li>
                <li className='serial-info__item'>
                    <h2 className='serial-info__item-title'>Оригинальное название</h2>
                    <p className='serial-info__item-text'>Wednesday</p>
                </li>
                <li className='serial-info__item'>
                    <h2 className='serial-info__item-title'>Жанры</h2>
                    <p className='serial-info__item-text'>Фентези, Комедия, Криминал, Детектив </p>
                </li>
                <li className='serial-info__item'>
                    <h2 className='serial-info__item-title'>Качество</h2>
                    <p className='serial-info__item-text'>Full HD</p>
                </li>
            </ul>
        </section>
    );
};