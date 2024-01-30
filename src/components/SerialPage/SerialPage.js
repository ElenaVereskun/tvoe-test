import { React } from 'react';
import SimilarSerial from '@/src/components/SimilarSerial/SimilarSerial';

export default function SerialPage() {
    return (
        <div className='serial-page'>
            <section className='serial-page__top'>

            </section>
            <section className='serial-page__seasons'></section>
            <section className='serial-page__about'></section>
            <SimilarSerial />
            <section className='serial-page__info'></section>
        </div>

    );
};