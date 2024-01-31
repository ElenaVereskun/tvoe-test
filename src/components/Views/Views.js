import { React } from 'react';
import Image from 'next/image';
import Misfortune from '@/src/images/posterMisfortune.png';
import Notification from '@/src/images/posterNotification.png';
import Witcher from '@/src/images/posterWitcher.png';
import NumberOne from '@/src/images/numberOne.png';
import NumberTwo from '@/src/images/numberTwo.png';
import NumberThree from '@/src/images/numberThree.png';
import Top10 from '@/src/images/top-10.svg';

function Views() {
    return (
        <section className='views'>
            <div className='views__title'>
                <Image className='views__big-title' src={Top10} alt='топ10'/>
                <h1 className='views__small-title'>просмотров за неделю</h1>
            </div>
            <ul className='views__items'>
                <li className='views__item'>
                    <Image className='views__item-title' src={NumberOne} alt='рейтинг 1' />
                    <Image className='views__item-image' src={Misfortune} alt='Моё прекрасное несчастье' />
                </li>
                <li className='views__item'>
                    <Image className='views__item-title' src={NumberTwo} alt='рейтинг 2' />
                    <Image className='views__item-image' src={Notification} alt='Красное уведомление' style={{marginLeft:'10px'}} />
                </li>
                <li className='views__item'>
                    <Image className='views__item-title' src={NumberThree} alt='рейтинг 3' />
                    <Image className='views__item-image' src={Witcher} alt='Ведьмак'  style={{marginLeft:'10px'}}/>
                </li>
            </ul>
        </section>
    );
}
export default Views;