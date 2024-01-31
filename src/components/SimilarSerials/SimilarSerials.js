import { React } from 'react';
import Image from 'next/image';
import Friends from '@/src/images/8friends.png';
import Encanto from '@/src/images/posterEncanto.svg';
import Notification from '@/src/images/posterRed.svg';
import BlueBeetle from '@/src/images/posterBlue.svg';
import Mayor from '@/src/images/posterMayor.svg';
import FiveNights from '@/src/images/poster5nights.svg';

export default function SimilarSerials() {
    return (
        <section className='similar-serials'>
            <h1 className='similar-serials__title'>Похожее</h1>
            <div className='similar-serials__items'>
                <Image src={Friends} alt='8 подруг Оушена' className='similar-serials__item'/>
                <Image src={Encanto} alt='Энканто' className='similar-serials__item'/>
                <Image src={Notification} alt='Красное уведомление' className='similar-serials__item'/>
                <Image src={BlueBeetle} alt='Синий жук' className='similar-serials__item'/>
                <Image src={Mayor} alt='Мэр Кингстауна' className='similar-serials__item'/>
                <Image src={FiveNights} alt='5 ночей с Фредди' className='similar-serials__item'/>
            </div>
        </section>
    );
};