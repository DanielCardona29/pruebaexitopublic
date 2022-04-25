import './styles/footer.scss';
import { useContext } from "react";
import { Link } from 'react-router-dom';

import ReactAudioPlayer from 'react-audio-player';

import { AppContext } from '../../aplication/provider';

const MusicReproductor = () => {
    const {
        reproducedSong,
        reproducedAlbum,
        reproducedArtist,
        NextSong,
        prevSong,
        ramdomSong
    } = useContext(AppContext);

    function msToTime(duration: any) {
        var seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60);
        let newminutes = (minutes < 10) ? "0" + minutes : minutes;
        let newseconds = (seconds < 10) ? "0" + seconds : seconds;
        return newminutes + ":" + newseconds;
    }


    return (
        <>
            {reproducedSong && (
                <div className='repro-wrapper'>
                    <div className="reproductor">
                        <button className="button-control back" onClick={prevSong}></button>
                        <ReactAudioPlayer
                            src={reproducedSong?.preview_url}
                            autoPlay
                            controls
                        />
                        <button className='button-control next' onClick={NextSong}></button>
                    </div>
                    <Link to={`/artist/${reproducedArtist?.id}/album/${reproducedAlbum?.id}`} className="songinfo">
                        <div className="image">
                            <img src={reproducedAlbum?.image} alt={reproducedAlbum?.name} />
                        </div>
                        <div className="info">

                            <div className="name">{reproducedSong?.name}</div>
                            <div className="duration">{msToTime(reproducedSong?.duration_ms)}</div>
                        </div>
                    </Link>
                    <button className="button-control ramdom" onClick={ramdomSong}></button>
                </div>
            )}
        </>

    )
}
export default MusicReproductor;