import './styles/home.scss';
import { useContext } from 'react';
//Componentes
import ArtistCard from '../../components/AritistCard';
import Loader from '../../components/Loader';

import { AppContext } from '../../aplication/provider';

const Home = () => {

    const { artistList, ArtistLoading } = useContext(AppContext);

    const cards = (
        <>
            <div className="container">
                {artistList.map((artist: any) => {
                    if (artist.spotify_id) {
                        return <ArtistCard key={artist.id} artist={artist} />
                    }
                    return null;
                }
                )}
            </div>
        </>
    )

    const loader = (
        <div className="loader">
            <Loader />
        </div>
    )


    return ArtistLoading ? loader : cards;
}

export default Home;