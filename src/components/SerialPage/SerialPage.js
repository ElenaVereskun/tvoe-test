import { React } from 'react';
import SimilarSerials from '@/src/components/SimilarSerials/SimilarSerials';
import SerialTop from '@/src/components/SerialTop/SerialTop';
import Seasons from '@/src/components/Seasons/Seasons';

export default function SerialPage() {
    return (
        <div className='serial-page'>
            <SerialTop />
            <Seasons/>
            <SimilarSerials />
            <section className='serial-page__info'></section>
        </div>
    );
};