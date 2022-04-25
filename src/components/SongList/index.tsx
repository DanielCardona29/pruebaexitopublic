import './styles/songList.scss';
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"

import { Song } from "../../hooks/types/artist";
import { AppContext } from '../../aplication/provider';
import Swal from 'sweetalert2';

const SongsList: React.FC<any> = (props) => {
    const navigate = useNavigate();
    const { songsList, ReproduceSong } = props;
    const { reproducedSong } = useContext(AppContext);

    if (songsList === undefined) {
        Swal.fire({
            title: 'Ups!',
            text: 'No hay canciones para este album',
            icon: 'error',
        }).then(() => {
            navigate(window.location.pathname.split('/album/')[0]);
        });
    }
    const songsRender = (
        <div className="song-list">
            <div className="title">Canciones</div>
            {songsList?.map((item: Song, index: number) => {
                return (
                    <div
                        className={reproducedSong?.id === item.id ? 'song active' : 'song'}
                        onClick={() => ReproduceSong(item)}>
                        <span className="number" >{index + 1}.</span>
                        <span className="name">{item.name}</span>
                    </div>
                )
            })}
        </div>
    )

    return songsRender
}

export default SongsList;