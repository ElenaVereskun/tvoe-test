import { React } from 'react';
import SerialTop from '@/src/components/SerialTop/SerialTop';
import Seasons from '@/src/components/Seasons/Seasons';
import SimilarSerials from '@/src/components/SimilarSerials/SimilarSerials';
import SerialInfo from '@/src/components/SerialInfo/SerialInfo';

export default function SerialPage() {
    return (
        <div className='serial-page'>
            <SerialTop />
            <Seasons />
            <SimilarSerials />
            <SerialInfo />
        </div>
    );
};