import { React } from 'react';
import Image from 'next/image';
import FirstEpisod from '@/src/images/1episod.png';
import SecondEpisod from '@/src/images/2episod.png';
import ThirdEpisod from '@/src/images/3episod.png';
import WarningIcon from '@/src/images/icon-warning.svg';

export default function Seasons() {
    return (
        <section className='seasons'>
            <div className='seasons__top'>
                <h2 className='seasons__title'>Сезоны</h2>
                <div className='seasons__choice'>
                    <button className='seasons__choice-item' style={{
                        backgroundColor: '#FFFFFF',
                        color: '#09090C'
                    }}>1</button>
                    <button className='seasons__choice-item'>2</button>
                    <button className='seasons__choice-item'>3</button>
                </div>
            </div>
            <div className='seasons__episodes'>
                <div className='seasons__episod'>
                    <Image src={FirstEpisod} alt='1серия' className='seasons__episod-poster' />
                    <p className='seasons__episod-number'>1 серия</p>
                    <p className='seasons__episod-duration'>43 минуты</p>
                </div>
                <div className='seasons__episod'>
                    <Image src={SecondEpisod} alt='2серия' className='seasons__episod-poster' />
                    <p className='seasons__episod-number'>2 серия</p>
                    <p className='seasons__episod-duration'>41 минуту</p>
                </div>
                <div className='seasons__episod'>
                    <Image src={ThirdEpisod} alt='3серия' className='seasons__episod-poster' />
                    <p className='seasons__episod-number'>3 серия</p>
                    <p className='seasons__episod-duration'>38 минут</p>
                </div>
            </div>
            <div className='seasons__about'>
                <h2 className='seasons__about-title'>Описание</h2>
                <p className='seasons__about-info'>Детективная история, наполненная сверхъестественными
                    силами. Главная героиня сериала — Уэнздей Аддамс,
                    одна из членов семейки Аддамс и единственная дочь Гомеса и Мортиши Аддамсов,
                    которая становится студенткой академии «Невермор». Она пытается овладеть своими
                    проявившимися экстрасенсорными способностями, помешать чудовищным убийствам монстра,
                    что терроризирует местный городок Джерико, а также разгадать тайну, в которую были
                    втянуты её родители 32 года назад, — и всё это на фоне её новых и очень запутанных
                    отношений в академии.</p>
                <div className='seasons__about-warning'>
                    <Image src={WarningIcon} alt='Предупреждение' className='seasons__warning-icon' />
                    <p className='seasons__about-text'>Контент может содержать сцены курения и
                        употребления спиртных напитков. Курение и чрезмерное употребление алкоголя вредит
                        вашему здоровью.</p>
                </div>
            </div>
        </section>
    );
};