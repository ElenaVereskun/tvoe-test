import { React } from 'react';
import Image from 'next/image';
import Wednesday from '@/src/images/posterWednesday.png';
import Yenz from '@/src/images/Уэнз.png';
import Day from '@/src/images/дэй.png';
import SaveButton from '@/src/images/SaveButton.svg';
import LikesButton from '@/src/images/likeButton.svg';

export default function SerialTop() {
    return (
        <section className='serial-top'>
            <Image className='serial-top__image' src={Wednesday} alt='постер_фильма' />
            <div className='serial-top__container'>
                <div className='serial-top__title'>
                    <Image className='serial-top__title-item' src={Yenz} alt='Уэнз' />
                    <Image className='serial-top__title-item' src={Day} alt='дэй' />
                </div>
                <div className='serial-top__items'>
                    <p className='serial-top__item' style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.20)',
                        padding: '14px 22px 12px 22px',
                        borderRadius: '12px'
                    }}>10</p>
                    <p className='serial-top__item'>2022-...</p>
                    <p className='serial-top__item'>1 сезон</p>
                    <p className='serial-top__item'>США</p>
                    <p className='serial-top__item'>Ужасы</p>
                    <p className='serial-top__item'>0+</p>
                </div>
                <p className='serial-top__about'>
                    Уэнсдэй предстоит освоить экстрасенсорные cпособности,
                    чтобы остановить местного серийного убийцу и раскрыть тайну родителей.
                </p>
                <div className='serial-top__buttons'>
                    <button className='serial-top__viewing'>Смотреть</button>
                    <button className='serial-top__trailer'>Трейлер</button>
                    <button className='serial-top__save' >
                        <Image className='serial-top__save-img' src={SaveButton} alt='Сохранить' />
                    </button>
                    <button className='serial-top__likes'>
                        <Image className='serial-top__likes-img' src={LikesButton} alt='Избранное' />
                    </button>
                </div>

            </div>
        </section>

    );
};