import { React } from 'react';
import Recomendation from '@/src/components/Recomendation/Recomendation';
import NewMovies from '@/src/components/NewMovies/NewMovies';
import Views from '@/src/components/Views/Views';

function Main() {
    return (
        <div className='main'>
            <Recomendation />
            <NewMovies />
            <Views />
        </div>

    );
}
export default Main;