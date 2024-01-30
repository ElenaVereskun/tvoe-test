import { React } from 'react';
import Image from 'next/image';
import RecomendationImage from '@/src/images/recomendation-image.png';
import RecomendationTitle from '@/src/images/recomendation-title.png';

function Recomendation() {
    return (
        <section>
            <div className='recomendation'>
                <Image className='recomendation__image' src={RecomendationImage} alt='постер_фильма' />
                <div className='recomendation__container'>
                    <Image className='recomendation__title' src={RecomendationTitle} alt='заголовок_фильма' />
                    <p className='recomendation__subtitle'>Неувядающий авантюрист
                        и пытливый археолог-исследователь по‑прежнему в седле.</p>
                    <div className='recomendation__buttons'>
                        <button className='recomendation__button-viewing'>Смотреть</button>
                        <button className='recomendation__button-about'>О фильме</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Recomendation;