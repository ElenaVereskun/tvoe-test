import { React } from 'react';
import SimilarSerial from '@/src/components/SimilarSerial/SimilarSerial';
import SerialTop from '@/src/components/SerialTop/SerialTop';
import Seasons from '@/src/components/Seasons/Seasons';

export default function SerialPage() {
    return (
        <div className='serial-page'>
            <SerialTop />
            <Seasons/>
            <SimilarSerial />
            <section className='serial-page__info'></section>
        </div>
    );
};